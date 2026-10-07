import * as THREE from "three";
import { REDUCED, TOUCH } from "../lib/env.js";

/* ================= WebGL hero ================= */
/** Hero shader: cover-fit photo + haze + pointer parallax. Returns false -> CSS fallback. */
export function initGL(){
  const cv = document.getElementById("gl");
  if (!cv) return false;
  if (REDUCED) return false;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas:cv, antialias:false, alpha:false });
  } catch(e){ return false; }
  if (!renderer.getContext()) return false;

  renderer.setPixelRatio(Math.min(devicePixelRatio, TOUCH ? 1.25 : 1.75));
  renderer.setSize(innerWidth, innerHeight, false);

  const scene  = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uTime:   { value: 0 },
    uMouse:  { value: new THREE.Vector2(0.5, 0.5) },
    uRes:    { value: new THREE.Vector2(innerWidth, innerHeight) },
    uTex:    { value: null },
    uHasTex: { value: 0 },
    uScroll: { value: 0 },
    uTexAsp: { value: 1.5 }
  };

  const frag = `
    precision highp float;
    uniform float uTime, uHasTex, uScroll, uTexAsp;
    uniform vec2  uMouse, uRes;
    uniform sampler2D uTex;
    varying vec2 vUv;

    // classic 2D value noise
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), u.x),
                 mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0, a = 0.5;
      for(int i=0;i<5;i++){ v += a*noise(p); p *= 2.03; a *= 0.5; }
      return v;
    }

    void main(){
      vec2 uv = vUv;
      float asp = uRes.x / uRes.y;

      // cover-fit the texture
      vec2 tuv = uv;
      float texAsp = uTexAsp;
      if (asp > texAsp) { tuv.y = (tuv.y - 0.5) * (texAsp/asp) + 0.5; }
      else              { tuv.x = (tuv.x - 0.5) * (asp/texAsp) + 0.5; }

      // drifting haze
      vec2 q = vec2(uv.x*1.6, uv.y*1.1);
      float n = fbm(q*2.4 + vec2(uTime*0.035, -uTime*0.05));
      float n2 = fbm(q*4.8 - vec2(uTime*0.02, uTime*0.03));

      // mouse-driven parallax + displacement
      vec2 m = (uMouse - 0.5);
      vec2 disp = vec2(n - 0.5, n2 - 0.5) * 0.045;
      tuv += m * 0.028 * vec2(1.0, -1.0);
      tuv += disp * (0.5 + uScroll);
      tuv.y += uScroll * 0.08;

      vec3 col;
      if (uHasTex > 0.5) {
        col = texture2D(uTex, tuv).rgb;
        // subtle chromatic split toward the edges
        float edge = length(uv - 0.5);
        col.r = texture2D(uTex, tuv + disp*0.35*edge).r;
        col.b = texture2D(uTex, tuv - disp*0.35*edge).b;
      } else {
        // graceful fallback: gold-lit haze over near-black
        vec3 deep = vec3(0.031,0.035,0.043);
        vec3 gold = vec3(0.76,0.64,0.42);
        col = mix(deep, gold*0.4, smoothstep(0.25,0.95,n*1.15));
      }

      // atmospheric fog rolling up the frame
      float fog = smoothstep(0.0, 0.85, n*0.75 + n2*0.45) * (1.0 - uv.y) * 0.42;
      col = mix(col, vec3(0.055,0.06,0.07), fog);

      // vignette
      float vig = smoothstep(1.05, 0.28, length((uv - 0.5) * vec2(asp,1.0)));
      col *= 0.42 + 0.58*vig;

      // gentle gold grade in the highlights
      float lum = dot(col, vec3(0.299,0.587,0.114));
      col = mix(col, col * vec3(1.06,0.99,0.86), smoothstep(0.35,0.9,lum));

      // dither to kill banding
      col += (hash(uv*uRes + uTime) - 0.5) * 0.015;

      gl_FragColor = vec4(col, 1.0);
    }`;

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`,
    fragmentShader: frag
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  // load the hero photograph; the shader works without it too
  const url = cv.dataset.src;
  cv.style.opacity = "0.22";
  if (url) {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(url, tex => {
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      uniforms.uTex.value = tex;
      uniforms.uTexAsp.value = tex.image.width / tex.image.height;
      uniforms.uHasTex.value = 1;
    }, undefined, () => {
      // The CSS hero image remains the visual base if the shader texture cannot load.
    });
  }

  addEventListener("mousemove", e => {
    uniforms.uMouse.value.set(e.clientX / innerWidth, 1 - e.clientY / innerHeight);
  }, { passive:true });

  addEventListener("resize", () => {
    renderer.setSize(innerWidth, innerHeight, false);
    uniforms.uRes.value.set(innerWidth, innerHeight);
  });

  const hero = document.querySelector(".hero");
  let visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold:0 })
      .observe(hero);
  }

  const clock = new THREE.Clock();
  (function render(){
    requestAnimationFrame(render);
    if (!visible || document.hidden) return;                          // don't burn GPU off-screen
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uScroll.value = Math.min(scrollY / innerHeight, 1);
    renderer.render(scene, camera);
  })();

  return true;
}

