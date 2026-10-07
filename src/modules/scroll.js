import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { REDUCED } from "../lib/env.js";
import { lang } from "../lib/i18n.js";
import { splitChars, splitWords } from "../lib/text.js";

/* ================= scroll choreography ================= */
export function initScroll(){
  gsap.registerPlugin(ScrollTrigger);

  /* --- Lenis smooth scroll --- */
  let lenis = null;
  if (!REDUCED) {
    lenis = new Lenis({ duration:1.15, smoothWheel:true,
      easing:x => Math.min(1, 1.001 - Math.pow(2, -10*x)) });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  window.__lenis = lenis;

  /* --- hide nav on scroll down --- */
  const nav = document.querySelector(".nav");
  let last = 0;
  addEventListener("scroll", () => {
    const y = scrollY;
    if (nav) nav.classList.toggle("hide", y > last && y > 300);
    last = y;
  }, { passive:true });

  if (REDUCED) { revealFallback(); return; }

  /* --- hero title --- */
  const heroLines = document.querySelectorAll(".hero h1 .rvline");
  const chars = [];
  heroLines.forEach(l => chars.push(...splitChars(l)));
  gsap.set(chars, { yPercent:112 });
  gsap.set([".kicker", ".hero-sub"], { opacity:0, y:26 });

  window.__introTL = () => {
    const tl = gsap.timeline();
    tl.to(chars, { yPercent:0, duration:1.15, stagger:0.022, ease:"expo.out" })
      .to(".kicker",   { opacity:1, y:0, duration:.9, ease:"expo.out" }, 0.25)
      .to(".hero-sub", { opacity:1, y:0, duration:.9, ease:"expo.out" }, 0.45);
    return tl;
  };

  /* --- generic line reveals --- */
  gsap.utils.toArray(".rv > *").forEach(el => {
    gsap.from(el, {
      yPercent:105, duration:1.05, ease:"expo.out",
      scrollTrigger:{ trigger:el, start:"top 88%" }
    });
  });
  gsap.utils.toArray(".fade").forEach(el => {
    gsap.from(el, {
      opacity:0, y:34, duration:1, ease:"expo.out",
      scrollTrigger:{ trigger:el, start:"top 88%" }
    });
  });

  /* --- manifesto: words light up as you scroll --- */
  const mani = document.querySelector(".mani h2");
  if (mani) {
    const words = splitWords(mani);
    let litPrev = 0;
    ScrollTrigger.create({
      trigger:".mani", start:"top 70%", end:"bottom 80%", scrub:true,
      onUpdate(self){
        const lit = Math.round(self.progress * words.length);
        if (lit === litPrev) return;
        const [a,b] = lit > litPrev ? [litPrev,lit] : [lit,litPrev];
        for (let i=a;i<b;i++) words[i].classList.toggle("lit", i < lit);
        litPrev = lit;
      }
    });
  }

  /* --- tower: scale + floor counter --- */
  const timg = document.querySelector(".tower-img");
  if (timg) {
    gsap.to(timg, {
      scale:1, ease:"none",
      scrollTrigger:{ trigger:".tower", start:"top top", end:"bottom bottom", scrub:.6 }
    });
    const floors = gsap.utils.toArray(".floor");
    ScrollTrigger.create({
      trigger:".tower", start:"top top", end:"bottom bottom", scrub:true,
      onUpdate(self){
        const i = Math.min(floors.length-1, Math.floor(self.progress * floors.length));
        floors.forEach((f,j) => f.classList.toggle("on", j === i));
      }
    });
    gsap.from(".tower-cap", {
      opacity:0, y:50, duration:1.1, ease:"expo.out",
      scrollTrigger:{ trigger:".tower", start:"top 40%" }
    });
  }

  /* --- counters --- */
  gsap.utils.toArray("[data-count]").forEach(el => {
    const end = +el.dataset.count;
    const o = { v:0 };
    gsap.to(o, {
      v:end, duration:2, ease:"power2.out",
      scrollTrigger:{ trigger:el, start:"top 88%" },
      onUpdate(){ el.textContent = Math.round(o.v).toLocaleString(lang === "ar" ? "ar-AE" : "en-US"); }
    });
  });

  /* --- horizontal gallery --- */
  const track = document.querySelector(".htrack");
  if (track) {
    const dist = () => track.scrollWidth - innerWidth + 80;
    gsap.to(track, {
      x: () => (lang === "ar" ? dist() : -dist()),
      ease:"none",
      scrollTrigger:{
        trigger:".hscroll", start:"top top", end:() => "+=" + dist(),
        scrub:.8, invalidateOnRefresh:true
      }
    });
  }

  /* --- marquee --- */
  const marq = document.querySelector(".marq-in");
  if (marq) {
    marq.innerHTML += marq.innerHTML;
    gsap.to(marq, { xPercent:-50, duration:26, ease:"none", repeat:-1 });
  }

  /* --- hero: copy drifts up, image eases back as the tower takes over --- */
  gsap.to(".hero-c", { yPercent:-14, opacity:0, ease:"none",
    scrollTrigger:{ trigger:".hero", start:"top top", end:"70% top", scrub:true } });
  gsap.to(".hero-fallback", { scale:1.1, yPercent:6, ease:"none",
    scrollTrigger:{ trigger:".hero", start:"top top", end:"bottom top", scrub:true } });

  /* --- amenities: three planes moving at different speeds (depth) --- */
  gsap.utils.toArray(".layer").forEach(l => {
    const s = (+l.dataset.speed || 1) * 36;
    gsap.fromTo(l, { y:s }, { y:-s, ease:"none",
      scrollTrigger:{ trigger:".amen-stage", start:"top bottom", end:"bottom top", scrub:true } });
    gsap.fromTo(l.firstElementChild, { yPercent:-6 }, { yPercent:6, ease:"none",
      scrollTrigger:{ trigger:l, start:"top bottom", end:"bottom top", scrub:true } });
  });

  /* --- architecture: image plane eases in, pointer tilt handled in pointer.js --- */
  gsap.from(".arch-img", { clipPath:"inset(0 0 100% 0)", duration:1.4, ease:"expo.out",
    scrollTrigger:{ trigger:".arch-img", start:"top 80%" } });

  /* --- lifestyle: full-bleed frame opens as it enters (masked reveal) --- */
  gsap.fromTo(".life-frame", { clipPath:"inset(16% 14% 16% 14%)" }, { clipPath:"inset(0% 0% 0% 0%)", ease:"none",
    scrollTrigger:{ trigger:".life", start:"top 85%", end:"top 10%", scrub:true } });
  gsap.fromTo(".life-frame img", { scale:1.25 }, { scale:1, ease:"none",
    scrollTrigger:{ trigger:".life", start:"top 85%", end:"bottom top", scrub:true } });

  ScrollTrigger.refresh();
}

/* fallback when GSAP is unavailable or motion is reduced */
function revealFallback(){
  document.querySelectorAll(".rv > *, .fade, .kicker, .hero-sub")
    .forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
  document.querySelectorAll(".mani .word").forEach(w => w.classList.add("lit"));
  document.querySelectorAll("[data-count]").forEach(el => {
    el.textContent = (+el.dataset.count).toLocaleString();
  });
  document.querySelectorAll(".floor").forEach((f,i) => i === 0 && f.classList.add("on"));
}

