import { t } from "../lib/i18n.js";

export function initForm(){
  const f = document.getElementById("enqForm");
  if (!f) return;
  const btn = f.querySelector("button[type=submit] span");
  f.addEventListener("submit", e => {
    e.preventDefault();
    if (!f.reportValidity()) return;
    if (btn) btn.textContent = t("sent");
    f.querySelectorAll("input,textarea").forEach(i => i.value = "");
    const select = f.querySelector("select");
    if (select) select.selectedIndex = 0;
    f.classList.add("sent");
  });
}
