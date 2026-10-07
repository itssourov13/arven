import { lang } from "./i18n.js";

/* ================= split text ================= */
export function splitChars(el){
  const src = el.textContent.trim();
  el.textContent = "";
  const line = document.createElement("span");
  line.className = "ln";
  (lang === "ar" ? [src] : [...src]).forEach(c => {
    const s = document.createElement("span");
    s.className = "ch";
    s.textContent = c === " " ? " " : c;
    line.appendChild(s);
  });
  el.appendChild(line);
  return line.querySelectorAll(".ch");
}
export function splitWords(el){
  const src = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  return src.map(w => {
    const s = document.createElement("span");
    s.className = "word";
    s.textContent = w + " ";
    el.appendChild(s);
    return s;
  });
}

