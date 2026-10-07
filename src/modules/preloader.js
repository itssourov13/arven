import gsap from "gsap";
import { REDUCED } from "../lib/env.js";
import { splitChars } from "../lib/text.js";

/* ================= preloader ================= */
export function initPre(){
  const pre = document.querySelector(".pre");
  if (!pre) return Promise.resolve();
  const markChars = splitChars(document.querySelector(".pre-mark"));
  const bar = document.querySelector(".pre-bar i");
  const num = document.querySelector(".pre-num");

  if (REDUCED) {
    pre.remove();
    document.querySelector(".pre-curtain")?.remove();
    return Promise.resolve();
  }

  return new Promise(res => {
    const o = { p:0 };
    const tl = gsap.timeline();
    tl.to(markChars, { yPercent:0, duration:.9, stagger:.05, ease:"expo.out" })
      .to(o, { p:100, duration:1.9, ease:"power2.inOut",
        onUpdate(){
          bar.style.transform = `scaleX(${o.p/100})`;
          num.textContent = String(Math.round(o.p)).padStart(3,"0");
        }}, .2)
      .to(markChars, { yPercent:-112, duration:.7, stagger:.03, ease:"expo.in" }, "+=0.15")
      .to([bar.parentElement, num], { opacity:0, duration:.4 }, "<")
      .to(pre, { yPercent:-100, duration:1.05, ease:"expo.inOut" }, "-=0.2")
      .to(".pre-curtain", { yPercent:-100, duration:1.05, ease:"expo.inOut",
        onComplete(){ pre.remove(); document.querySelector(".pre-curtain")?.remove(); }
      }, "<0.08")
      .add(() => { if (window.__introTL) window.__introTL(); }, "-=0.55")
      .add(res, "<");
  });
}

