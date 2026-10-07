import "./styles/main.css";
import { IMAGES } from "./config/images.js";
import { applyLang, toggleLang } from "./lib/i18n.js";
import { initCursor } from "./modules/cursor.js";
import { initMagnetic } from "./modules/magnetic.js";
import { initGL } from "./modules/gl.js";
import { initScroll } from "./modules/scroll.js";
import { initPre } from "./modules/preloader.js";
import { initNav, initSpot } from "./modules/nav.js";
import { initTilt } from "./modules/pointer.js";
import { initForm } from "./modules/form.js";
import { initResidenceExplorer } from "./modules/residences.js";
import { initV3Experience } from "./modules/v3-experience.js";

function resolveImages(){
  document.querySelectorAll("[data-img]").forEach(el => {
    const url = IMAGES[el.dataset.img];
    if (!url) return;
    if (el.tagName === "CANVAS") el.dataset.src = url;
    else el.src = url;
  });
}

function boot(){
  resolveImages();
  applyLang();

  const lb = document.getElementById("langBtn");
  if (lb) lb.onclick = () => { toggleLang(); location.reload(); };

  if (!initGL()) {
    const fb = document.querySelector(".hero-fallback");
    const cv = document.getElementById("gl");
    if (fb && cv) {
      fb.style.backgroundImage = "url(" + cv.dataset.src + ")";
      cv.style.display = "none";
    }
  }

  initCursor();
  initMagnetic();
  initForm();
  initResidenceExplorer();
  initV3Experience();
  initScroll();
  initNav();
  initSpot();
  initTilt();
  initPre();
  document.documentElement.classList.add("ready");
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", boot)
  : boot();
