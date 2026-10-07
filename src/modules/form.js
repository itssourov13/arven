import { t } from "../lib/i18n.js";

/* ================= form ================= */
export function initForm(){
  const f = document.getElementById("enqForm");
  if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    if (!f.reportValidity()) return;
    const btn = f.querySelector("button[type=submit] span");
    if (btn) btn.textContent = t("sent");
    f.querySelectorAll("input,textarea").forEach(i => i.value = "");
  });
}

