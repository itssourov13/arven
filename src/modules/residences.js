import { lang, t } from "../lib/i18n.js";

const DATA = {
  one:{name:["One Bedroom","غرفة واحدة"],size:["812 – 940","٨١٢ – ٩٤٠"],type:["01","٠١"],price:["AED 2.15M","٢٫١٥ مليون درهم"],view:["Water-facing","إطلالة على الماء"],detail:["Open plan living · private terrace · full-height glazing","معيشة مفتوحة · تراس خاص · زجاج كامل الارتفاع"]},
  two:{name:["Two Bedroom","غرفتان"],size:["1,310 – 1,580","١٬٣١٠ – ١٬٥٨٠"],type:["02","٠٢"],price:["AED 3.42M","٣٫٤٢ مليون درهم"],view:["Canal & skyline","القناة والأفق"],detail:["Dual-aspect living · generous kitchen · shaded terrace","معيشة بواجهتين · مطبخ واسع · تراس مظلل"]},
  three:{name:["Three Bedroom","ثلاث غرف"],size:["1,940 – 2,260","١٬٩٤٠ – ٢٬٢٦٠"],type:["03","٠٣"],price:["AED 5.18M","٥٫١٨ مليون درهم"],view:["Corner water view","إطلالة مائية زاوية"],detail:["Private arrival · family room · expansive water terrace","مدخل خاص · غرفة عائلية · تراس مائي واسع"]},
  duplex:{name:["Duplex","دوبلكس"],size:["3,100 – 3,480","٣٬١٠٠ – ٣٬٤٨٠"],type:["04","٠٤"],price:["AED 8.90M","٨٫٩٠ مليون درهم"],view:["Panoramic water","إطلالة بانورامية على الماء"],detail:["Double-height living · private lift lobby · two terraces","معيشة بارتفاع مزدوج · ردهة مصعد خاصة · تراسان"]},
  villa:{name:["Sky Villa","فيلا سماوية"],size:["5,240","٥٬٢٤٠"],type:["05","٠٥"],price:["AED 16.4M","١٦٫٤ مليون درهم"],view:["Skyline + canal","الأفق والقناة"],detail:["Private arrival · sky garden · sunset lounge","مدخل خاص · حديقة سماوية · صالة الغروب"]},
  penthouse:{name:["Penthouse","بنتهاوس"],size:["7,860","٧٬٨٦٠"],type:["06","٠٦"],price:["AED 29.0M","٢٩٫٠ مليون درهم"],view:["Uninterrupted horizon","أفق بلا انقطاع"],detail:["Private lift · entertaining floor · roof terrace concept","مصعد خاص · طابق للضيافة · مفهوم تراس السطح"]}
};

export function initResidenceExplorer(){
  const root = document.querySelector("[data-res-explorer]");
  if (!root) return;
  const buttons = [...root.querySelectorAll("[data-res-option]")];
  const set = key => {
    const d = DATA[key] || DATA.one;
    const ar = lang === "ar";
    root.querySelector("[data-res-type]").textContent = ar ? d.type[1] : d.type[0];
    root.querySelector("[data-res-name]").textContent = ar ? d.name[1] : d.name[0];
    root.querySelector("[data-res-size]").textContent =
      (ar ? d.size[1] : d.size[0]) + " " + t("sqft");
    root.querySelector("[data-res-view]").textContent = ar ? d.view[1] : d.view[0];
    root.querySelector("[data-res-detail]").textContent = ar ? d.detail[1] : d.detail[0];
    root.querySelector("[data-res-price]").textContent = ar ? d.price[1] : d.price[0];
    buttons.forEach(b => b.classList.toggle("on", b.dataset.resOption === key));
    root.querySelector("[data-res-plan]")?.setAttribute("data-plan", key);
  };
  buttons.forEach(b => b.addEventListener("click", () => set(b.dataset.resOption)));
  set(buttons.find(b => b.classList.contains("on"))?.dataset.resOption || "one");
}
