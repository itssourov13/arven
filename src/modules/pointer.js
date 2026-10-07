import { TOUCH, REDUCED } from "../lib/env.js";

/** Subtle perspective on .tilt elements: depth that answers the pointer. */
export function initTilt(){
  if (TOUCH || REDUCED) return;
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 8 + "deg");
      el.style.setProperty("--rx", -((e.clientY - r.top) / r.height - .5) * 6 + "deg");
    }, { passive:true });
    el.addEventListener("pointerleave", () => { el.style.setProperty("--ry","0deg"); el.style.setProperty("--rx","0deg"); });
  });
}
