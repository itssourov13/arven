import { TOUCH, REDUCED } from "../lib/env.js";

/* ================= magnetic buttons ================= */
export function initMagnetic(){
  if (TOUCH || REDUCED) return;
  document.querySelectorAll(".mag").forEach(b => {
    const str = 0.34;
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) * str;
      const y = (e.clientY - r.top - r.height/2) * str;
      b.style.transform = `translate(${x}px,${y}px)`;
    });
    b.addEventListener("mouseleave", () => { b.style.transform = "translate(0,0)"; });
  });
}

