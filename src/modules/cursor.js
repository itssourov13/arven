import { TOUCH } from "../lib/env.js";

/* ================= cursor ================= */
export function initCursor(){
  if (TOUCH) return;
  const dot  = document.querySelector(".cur");
  const ring = document.querySelector(".cur-r");
  if (!dot || !ring) return;
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  let run = false;
  const loop = () => {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    if (Math.abs(mx - rx) + Math.abs(my - ry) > 0.2) requestAnimationFrame(loop); else run = false;
  };
  addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    if (!run) { run = true; requestAnimationFrame(loop); }
  }, { passive:true });
  document.querySelectorAll("a,button,.hcard,.res-card,.material,input,textarea,select")
    .forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("big"));
      el.addEventListener("mouseleave", () => ring.classList.remove("big"));
    });
}

