import { IMAGES } from "../config/images.js";
import { lang } from "../lib/i18n.js";
import { V3_RESIDENCES, V3_TOWER, V3_MATERIALS, V3_CONCIERGE } from "../data/v3.js";

const names = {
  one:["One Bedroom","غرفة واحدة"],
  two:["Two Bedroom","غرفتان"],
  three:["Three Bedroom","ثلاث غرف"],
  duplex:["Duplex","دوبلكس"],
  villa:["Sky Villa","فيلا سماوية"],
  penthouse:["Penthouse","بنتهاوس"]
};

const ar = value => lang === "ar" ? value[1] : value[0];

function setText(root, selector, value){
  const el = root?.querySelector(selector);
  if (el) el.textContent = value;
}

const DETAIL_AR = {
  view:{
    "Water-facing":"إطلالة على الماء","Canal & skyline":"القناة والأفق","Corner water view":"إطلالة مائية زاوية","Panoramic water":"إطلالة بانورامية على الماء","Skyline + canal":"الأفق والقناة","Uninterrupted horizon":"أفق بلا انقطاع"
  },
  orientation:{"South-east":"جنوب شرق","East":"شرق","South":"جنوب","South-west":"جنوب غرب"},
  terrace:{"Private terrace":"تراس خاص","Shaded terrace":"تراس مظلل","Expansive water terrace":"تراس مائي واسع","Two terraces":"تراسان","Sky garden":"حديقة سماوية","Roof terrace concept":"مفهوم تراس السطح"},
  room:{Living:"المعيشة",Suite:"الجناح",Kitchen:"المطبخ",Terrace:"التراس", "Principal Suite":"الجناح الرئيسي",Arrival:"المدخل", "Family Room":"غرفة العائلة", "Great Room":"الغرفة الرئيسية",Study:"الدراسة", "Sky Garden":"الحديقة السماوية", "Sunset Lounge":"صالة الغروب", "Entertaining Floor":"طابق الضيافة", "Roof Terrace":"تراس السطح"},
  desc:{
    Living:"معيشة مفتوحة بزجاج كامل الارتفاع.", Suite:"جناح رئيسي هادئ بإطلالة على القناة.", Kitchen:"مطبخ مدمج مع مساحة إفطار صغيرة.", Terrace:"غرفة خارجية مظللة لضوء الصباح.",
    "Principal Suite":"جناح خاص يواجه الأفق المتغير.", Arrival:"مدخل خاص بقاعة استقبال واسعة.", "Family Room":"غرفة عائلية يمكن عزلها عن مساحات الضيافة.", "Great Room":"معيشة وطعام بارتفاع مزدوج.", Study:"غرفة عمل هادئة منفصلة عن منطقة الاستضافة.", "Sky Garden":"حديقة مرتفعة تصبح غرفة إضافية فوق المدينة.", "Sunset Lounge":"صالة هادئة مصممة للساعة الذهبية.", "Entertaining Floor":"معيشة وطعام ومطبخ مرتبة للأمسيات الطويلة.", "Roof Terrace":"مساحة خارجية مفاهيمية فوق المدينة."
  }
};

function syncExplorerDetail(root, key){
  const d = V3_RESIDENCES[key] || V3_RESIDENCES.one;
  const residence = root.querySelector("[data-v3-res-detail]");
  if (!residence) return;

  setText(residence, "[data-v3-detail-name]", ar(names[key] || names.one));
  setText(residence, "[data-v3-detail-size]", d.size);
  setText(residence, "[data-v3-detail-floor]", d.floor);
  setText(residence, "[data-v3-detail-beds]", d.beds);
  setText(residence, "[data-v3-detail-baths]", d.baths);
  setText(residence, "[data-v3-detail-view]", lang === "ar" ? (DETAIL_AR.view[d.view] || d.view) : d.view);
  setText(residence, "[data-v3-detail-orientation]", lang === "ar" ? (DETAIL_AR.orientation[d.orientation] || d.orientation) : d.orientation);
  setText(residence, "[data-v3-detail-terrace]", lang === "ar" ? (DETAIL_AR.terrace[d.terrace] || d.terrace) : d.terrace);

  residence.querySelectorAll("[data-v3-room]").forEach((el, i) => {
    const room = d.rooms[i] || d.rooms[0];
    el.querySelector("b").textContent = lang === "ar" ? (DETAIL_AR.room[room[0]] || room[0]) : room[0];
    el.querySelector("p").textContent = lang === "ar" ? (DETAIL_AR.desc[room[0]] || room[1]) : room[1];
  });
}

function initTower(root){
  const tabs = [...root.querySelectorAll("[data-v3-floor]")];
  const heroName = root.querySelector("[data-v3-tower-name]");
  const heroNote = root.querySelector("[data-v3-tower-note]");
  const towerCopy = {
    villa:["Sky Villa","فيلا سماوية","The highest private residence","أعلى وحدة سكنية خاصة"],
    penthouse:["Penthouse","بنتهاوس","A private horizon above the city","أفق خاص فوق المدينة"],
    duplex:["Duplex","دوبلكس","Two levels, one continuous view","مستويان، وإطلالة واحدة متصلة"],
    three:["Sky Garden","حديقة سماوية","A planted terrace in the collection","تراس مزروع ضمن المجموعة"],
    two:["Residences","وحدات سكنية","Light-filled canal-facing homes","وحدات مضيئة بإطلالة على القناة"],
    one:["Residences","وحدات سكنية","A quieter beginning to the collection","بداية أكثر هدوءاً للمجموعة"]
  };
  const set = (key, jump = false) => {
    const item = V3_TOWER.find(x => x.key === key) || V3_TOWER[0];
    const copy = towerCopy[item.key] || towerCopy.villa;
    tabs.forEach(btn => btn.classList.toggle("on", btn.dataset.v3Floor === item.key));
    if (heroName) heroName.textContent = lang === "ar" ? copy[1] : copy[0];
    if (heroNote) heroNote.textContent = lang === "ar" ? copy[3] : copy[2];
    const option = document.querySelector("[data-res-option='"+item.key+"']");
    if (option) {
      option.click();
      if (jump) document.querySelector("[data-res-explorer]")?.scrollIntoView({behavior:"smooth",block:"center"});
    }
  };
  tabs.forEach(btn => btn.addEventListener("click", () => set(btn.dataset.v3Floor, true)));
  set(tabs.find(x => x.classList.contains("on"))?.dataset.v3Floor || "villa");
}

function initResidenceDetail(){
  const root = document.querySelector("[data-res-explorer]");
  if (!root) return;
  const detail = document.querySelector("[data-v3-res-detail]");
  if (!detail) return;
  const update = key => syncExplorerDetail(document, key);
  root.addEventListener("arven:residence-change", e => update(e.detail?.key || "one"));
  update(root.querySelector(".explorer-tabs button.on")?.dataset.resOption || "one");
}

function initCompare(){
  const root = document.querySelector("[data-v3-compare]");
  if (!root) return;
  const selects = [...root.querySelectorAll("[data-compare-select]")];
  const set = () => {
    const keys = selects.map(s => s.value);
    keys.forEach((key, i) => {
      const data = V3_RESIDENCES[key] || V3_RESIDENCES.one;
      const name = root.querySelector("[data-compare-name='"+i+"']");
      if (name) name.textContent = ar(names[key] || names.one);
      const values = {
        floor:data.floor, size:data.size, beds:data.beds, baths:data.baths,
        view:lang === "ar" ? (DETAIL_AR.view[data.view] || data.view) : data.view,
        terrace:lang === "ar" ? (DETAIL_AR.terrace[data.terrace] || data.terrace) : data.terrace,
        price:data.price
      };
      Object.entries(values).forEach(([field,value]) => {
        const el = root.querySelector("[data-compare='"+field+"-"+i+"']");
        if (el) el.textContent = value;
      });
    });
  };
  selects.forEach(s => s.addEventListener("change", set));
  set();
}

function initViews(){
  const root = document.querySelector("[data-view-finder]");
  if (!root) return;
  const buttons = [...root.querySelectorAll("[data-view-key]")];
  const image = root.querySelector("[data-view-image]");
  const title = root.querySelector("[data-view-title]");
  const copy = root.querySelector("[data-view-copy]");
  const views = {
    water:{key:"cityDusk",title:["Water / Blue Hour","الماء / الساعة الزرقاء"],copy:["A quiet horizon where the canal carries the first reflections of the city.","أفق هادئ يحمل انعكاسات المدينة الأولى على القناة."]},
    skyline:{key:"dusk",title:["Skyline / Dusk","الأفق / الغروب"],copy:["The city becomes part of the room as the light falls behind the towers.","تصبح المدينة جزءاً من الغرفة مع انحسار الضوء خلف الأبراج."]},
    terrace:{key:"terrace",title:["Terrace / Day","التراس / النهار"],copy:["Open air, shade and a long view designed for slower afternoons.","هواء طلق وظل وإطلالة طويلة مصممة لفترات بعد الظهر الهادئة."]},
    night:{key:"cityDusk",title:["City / Night","المدينة / الليل"],copy:["A darker palette, quieter rooms and the skyline reduced to points of light.","لوحة أكثر هدوءاً وغرف ساكنة تتحول فيها المدينة إلى نقاط ضوء."]}
  };
  const set = key => {
    const v = views[key] || views.water;
    buttons.forEach(b => b.classList.toggle("on", b.dataset.viewKey === key));
    if (image) image.src = IMAGES[v.key];
    if (title) title.textContent = ar(v.title);
    if (copy) copy.textContent = ar(v.copy);
    root.style.setProperty("--view-progress", String(Object.keys(views).indexOf(key) / 3));
  };
  buttons.forEach(b => b.addEventListener("click", () => set(b.dataset.viewKey)));
  set("water");
}

function initLightCycle(){
  const root = document.querySelector("[data-light-cycle]");
  if (!root) return;
  const buttons = [...root.querySelectorAll("[data-light-key]")];
  const scene = root.querySelector("[data-light-scene]");
  const image = root.querySelector("[data-light-image]");
  const copy = root.querySelector("[data-light-copy]");
  const label = root.querySelector("[data-light-label]");
  const time = root.querySelector("[data-light-time]");
  const phases = {
    dawn:{label:["FIRST LIGHT","الضوء الأول"],time:"06:10",copy:["A pale first reflection, before the city fully wakes.","انعكاس أول شاحب، قبل أن تستيقظ المدينة تماماً."],tone:"dawn"},
    morning:{label:["MORNING","الصباح"],time:"08:30",copy:["Soft daylight settles into the living spaces and water-facing rooms.","يستقر ضوء النهار الهادئ في مساحات المعيشة والغرف المواجهة للماء."],tone:"morning"},
    afternoon:{label:["AFTERNOON","بعد الظهر"],time:"12:40",copy:["Deeper shade turns the strongest hours into a calmer interior rhythm.","يحوّل الظل الأعمق أقوى ساعات النهار إلى إيقاع داخلي أكثر هدوءاً."],tone:"afternoon"},
    blue:{label:["BLUE HOUR","الساعة الزرقاء"],time:"17:20",copy:["The canal turns blue and the skyline begins to glow beyond the glass.","تتحول القناة إلى الأزرق ويبدأ الأفق بالتوهج خلف الزجاج."],tone:"blue"},
    night:{label:["AFTER DARK","بعد الغروب"],time:"21:45",copy:["A darker palette, quieter rooms and points of city light beyond the terrace.","لوحة أكثر قتامة وغرف أكثر هدوءاً ونقاط ضوء المدينة خلف التراس."],tone:"night"}
  };
  const set = key => {
    const d = phases[key] || phases.dawn;
    buttons.forEach(btn => btn.classList.toggle("on", btn.dataset.lightKey === key));
    root.dataset.lightState = d.tone;
    if (label) label.textContent = ar(d.label);
    if (time) time.textContent = d.time;
    if (copy) copy.textContent = ar(d.copy);
    if (scene) scene.classList.remove("is-changing"), requestAnimationFrame(() => scene.classList.add("is-changing"));
    if (image) image.style.filter = "var(--light-filter)";
  };
  buttons.forEach(btn => btn.addEventListener("click", () => set(btn.dataset.lightKey)));
  set("dawn");
}

const MATERIAL_AR = {
  travertine:{label:"ترافرتين",sub:"حجر جيري دافئ / ملمس طبيعي",copy:"حجر مصقول بهدوء يلتقط تغيرات ضوء النهار بدلاً من منافسته."},
  oak:{label:"بلوط مدخّن",sub:"خشب داكن / عروق هادئة",copy:"درجات الخشب العميقة تضيف وزناً ودفئاً إلى الغرف الهادئة في المسكن."},
  bronze:{label:"برونز مصقول",sub:"معدن / انعكاس ناعم",copy:"لمسة معدنية هادئة للتجهيزات وتفاصيل النجارة والحواف بين الخامات."},
  linen:{label:"كتان منسوج",sub:"نسيج / انتشار ناعم",copy:"نسيج فاتح يحافظ على ملمس طبيعي وغير متكلف."}
};

function initAtelier(){
  const root = document.querySelector("[data-atelier]");
  if (!root) return;
  const buttons = [...root.querySelectorAll("[data-material-key]")];
  const swatch = root.querySelector("[data-atelier-swatch]");
  const title = root.querySelector("[data-atelier-title]");
  const sub = root.querySelector("[data-atelier-sub]");
  const copy = root.querySelector("[data-atelier-copy]");
  const set = key => {
    const d = V3_MATERIALS[key] || V3_MATERIALS.travertine;
    buttons.forEach(b => b.classList.toggle("on", b.dataset.materialKey === key));
    const arData = MATERIAL_AR[key] || MATERIAL_AR.travertine;
    if (swatch) swatch.style.background = d.bg;
    if (title) title.textContent = lang === "ar" ? arData.label : d.label;
    if (sub) sub.textContent = lang === "ar" ? arData.sub : d.sub;
    if (copy) copy.textContent = lang === "ar" ? arData.copy : d.copy;
  };
  buttons.forEach(b => b.addEventListener("click", () => set(b.dataset.materialKey)));
  set("travertine");
}

const CONCIERGE_AR = [
  "بنتهاوس هو أوسع وحدة مفاهيمية في المجموعة ويضم مفهوماً لتراس على السطح.",
  "تقع الفيلا السماوية في أعلى البرج مع حديقة سماوية، بينما يركز البنتهاوس على طابق ضيافة أكبر ومفهوم تراس فوق المدينة.",
  "ينظم النادي حول الماء والعافية والدراسة والطعام الخاص، مع طبقة خدمة أكثر هدوءاً خلف الوحدات السكنية.",
  "تتكون لوحة المواد الأساسية من الترافرتين والبلوط المدخّن والبرونز المصقول والكتان المنسوج."
];

function initConcierge(){
  const root = document.querySelector("[data-concierge]");
  if (!root) return;
  const answer = root.querySelector("[data-concierge-answer]");
  root.querySelectorAll("[data-concierge-q]").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const item = V3_CONCIERGE[index] || V3_CONCIERGE[0];
      root.querySelectorAll("[data-concierge-q]").forEach(x => x.classList.remove("on"));
      btn.classList.add("on");
      if (answer) {
        answer.classList.remove("show");
        requestAnimationFrame(() => {
          answer.textContent = lang === "ar" ? (CONCIERGE_AR[index] || item.a) : item.a;
          answer.classList.add("show");
        });
      }
    });
  });
  root.querySelector("[data-concierge-q]")?.click();
}

export function initV3Experience(){
  const tower = document.querySelector("[data-v3-tower]");
  if (tower) initTower(tower);
  initResidenceDetail();
  initCompare();
  initViews();
  initLightCycle();
  initAtelier();
  initConcierge();
}
