import { TOUCH } from "../lib/env.js";

/* ================= nav: menu, anchors, active section ================= */
export function initNav(){
  const root = document.documentElement, burger = document.getElementById("burger");
  const setMenu = open => {
    root.classList.toggle("menu-open", open);
    burger && burger.setAttribute("aria-expanded", open);
    const l = window.__lenis; if (l) open ? l.stop() : l.start();
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger && burger.addEventListener("click", () => setMenu(!root.classList.contains("menu-open")));
  addEventListener("keydown", e => e.key === "Escape" && setMenu(false));
  document.querySelectorAll(".menu a").forEach((a,i) => a.style.setProperty("--i", i));
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href"), el = id.length > 1 && document.querySelector(id);
    if (!el) return;
    e.preventDefault(); setMenu(false);
    const l = window.__lenis;
    l ? l.scrollTo(el, { duration:1.6, offset:0 }) : el.scrollIntoView({ behavior:"smooth" });
  }));
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".nav-l a")];
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin:"-45% 0px -50% 0px" });
  links.forEach(a => { const s = document.querySelector(a.getAttribute("href")); s && io.observe(s); });
}

/* residence cards: light follows the pointer */
export function initSpot(){
  if (TOUCH) return;
  document.querySelectorAll(".res-card").forEach(c => c.addEventListener("pointermove", e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px");
    c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive:true }));
}

