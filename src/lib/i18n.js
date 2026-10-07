/* ================= ARVEN bilingual content ================= */
const T = {
  en: {
    n1:"The Address", n2:"Residences", n3:"The Club", n4:"Location", n5:"Private Preview",
    kick:"Dubai Water Canal · A private collection",
    h1a:"ARVEN", h1b:"RESIDENCES",
    lede:"Forty-two storeys above the canal. Ninety-one residences shaped by light, water and space.", tagline:"Where the city meets stillness.",
    cta:"Explore residences", cta2:"Private viewing", scroll:"Scroll",
    mani:"Dubai is built for motion. ARVEN is made for the pause.",
    mani_p:"A fictional waterfront residence concept shaped around the things the city makes rare: stillness, privacy, natural light and an uninterrupted relationship with water.",
    address_eye:"The Address", address_h:"A different relationship with the city",
    address_p:"Turned four degrees from the urban grid, ARVEN opens its architecture towards water, light and the changing horizon.",
    s1:"Storeys", s2:"Residences", s3:"Sky gardens", s4:"Metres",
    arch_eye:"Architecture", arch_h:"A building composed around the view",
    arch_intro:"Three design decisions define the address: a subtle turn, deeper shade and rooms arranged for the horizon.",
    arch1:"The Turn", arch1s:"Four degrees off the grid, so the building opens instead of closing in.",
    arch2:"The Light", arch2s:"Deep balconies and filtered glazing soften Dubai's strongest afternoon sun.",
    arch3:"The View", arch3s:"Every principal room is composed around what lies beyond the glass.",
    int_eye:"Interiors", int_h:"Rooms composed around light.",
    g1:"The Arrival", g2:"Living", g3:"The Kitchen", g4:"Principal Suite", g5:"Sky Garden", g6:"The Pool Deck",
    club_eye:"The Club", club_h:"A private layer of life above the city.",
    club_p:"Wellness, water, dining and quiet spaces are treated as part of the residence—not additions around it.",
    c1:"The Water Room", c1s:"Infinity pool · sunset terrace · private cabanas",
    c2:"The Wellness House", c2s:"Hammam · sauna · recovery lounge · treatment rooms",
    c3:"The Study", c3s:"Library · work lounge · private meeting room",
    c4:"The Dining Room", c4s:"Private dining · residents' kitchen · hosted evenings",
    mat_eye:"Materials", mat_h:"Quiet materials. Precise details.",
    mat_p:"Travertine, smoked oak, brushed bronze and woven linen create a warm, restrained palette designed to age well.",
    m1:"Travertine", m2:"Smoked Oak", m3:"Brushed Bronze", m4:"Woven Linen",
    res_eye:"The Residences", res_h:"Choose your perspective.",
    res_p:"Six residence types, each designed around light, privacy and the water beyond.",
    r1:"One Bedroom", r2:"Two Bedroom", r3:"Three Bedroom", r4:"Duplex", r5:"Sky Villa", r6:"Penthouse",
    from:"From", sqft:"sq ft",
    explore_eye:"Residence Explorer", explore_h:"Compare the collection.",
    explore_p:"Concept layouts for the digital experience. Final plans and specifications are subject to the fictional development brief.",
    exp_view:"Water-facing", exp_detail:"Open plan living · private terrace · full-height glazing",
    exp_cta:"Request residence details",
    life_eye:"From first light to last light", life_h:"Mornings on the canal. Evenings above it.",
    life_p:"Morning begins slowly at the water's edge. By afternoon, the city moves below. At dusk, the skyline becomes part of the room.",
    loc_eye:"Location", loc_h:"On the water, in the middle of everything",
    loc_p:"A fictional Dubai Water Canal address positioned as a quiet base for the city's cultural, business and leisure districts.",
    d1:"Downtown Dubai", d2:"DIFC", d3:"Dubai Marina", d4:"DXB Airport", d5:"Jumeirah Beach", min:"min",
    preview_eye:"Private Preview", preview_h:"A considered first look.",
    preview_p:"The first collection is presented privately. Tell us how you would like to experience ARVEN.",
    f_name:"Full name", f_email:"Email address", f_phone:"Phone", f_res:"Residence preference", f_msg:"Anything we should know?",
    rsel:"Select a residence", submit:"Request private viewing",
    note:"Concept project. Nothing is submitted anywhere and no personal data is collected.",
    sent:"Thank you. Your private preview request is recorded.",
    ftr_c:"Project", ftr_l:"Concept", ftr_f:"Follow",
    ribbon:"Independent concept project · 2026 · Not for sale",
    legal:"ARVEN is a fictional residential development concept presented for design and technology demonstration only. Images are public reference imagery and are not project renders."
  },
  ar: {
    n1:"العنوان", n2:"الوحدات", n3:"النادي", n4:"الموقع", n5:"معاينة خاصة",
    kick:"قناة دبي المائية · مجموعة سكنية خاصة",
    h1a:"آرفن", h1b:"ريزيدنسز",
    lede:"اثنان وأربعون طابقاً فوق القناة. إحدى وتسعون وحدة صُممت حول الضوء والماء والمساحة.", tagline:"حيث تلتقي المدينة بالسكون.",
    cta:"استكشف الوحدات", cta2:"معاينة خاصة", scroll:"مرّر",
    mani:"دبي مدينة الحركة. آرفن صُمم للحظة السكون.",
    mani_p:"مفهوم سكني مائي خيالي يتشكل حول ما يجعل المدينة نادراً: الهدوء، الخصوصية، الضوء الطبيعي وعلاقة متواصلة مع الماء.",
    address_eye:"العنوان", address_h:"علاقة مختلفة مع المدينة",
    address_p:"بميل أربع درجات عن الشبكة العمرانية، يفتح آرفن عمارته نحو الماء والضوء والأفق المتغير.",
    s1:"طابقاً", s2:"وحدة", s3:"حدائق سماوية", s4:"متراً",
    arch_eye:"العمارة", arch_h:"مبنى صُمم حول المشهد",
    arch_intro:"ثلاثة قرارات تصميمية تحدد العنوان: الميل الخفيف، الظل الأعمق، والغرف المرتبة حول الأفق.",
    arch1:"الميل", arch1s:"أربع درجات عن الشبكة، ليفتح المبنى بدلاً من أن ينغلق.",
    arch2:"الضوء", arch2s:"شرفات عميقة وزجاج مُرشّح يخففان شمس دبي بعد الظهر.",
    arch3:"المشهد", arch3s:"كل مساحة رئيسية صيغت حول ما يقع خلف الزجاج.",
    int_eye:"التصميم الداخلي", int_h:"غرف صيغت حول الضوء.",
    g1:"المدخل", g2:"المعيشة", g3:"المطبخ", g4:"الجناح الرئيسي", g5:"الحديقة السماوية", g6:"سطح المسبح",
    club_eye:"النادي", club_h:"طبقة خاصة من الحياة فوق المدينة.",
    club_p:"العافية والماء والطعام والمساحات الهادئة جزء من التجربة السكنية، وليست إضافات حولها.",
    c1:"غرفة الماء", c1s:"مسبح لا متناهٍ · تراس الغروب · كبائن خاصة",
    c2:"بيت العافية", c2s:"حمّام · ساونا · صالة تعافٍ · غرف علاج",
    c3:"الدراسة", c3s:"مكتبة · صالة عمل · غرفة اجتماعات خاصة",
    c4:"غرفة الطعام", c4s:"طعام خاص · مطبخ السكان · أمسيات مستضافة",
    mat_eye:"الخامات", mat_h:"خامات هادئة. تفاصيل دقيقة.",
    mat_p:"ترافرتين، بلوط مدخّن، برونز مصقول وكتان منسوج يخلقون لوحة دافئة ومتزنة مصممة لتتقدم بأناقة.",
    m1:"ترافرتين", m2:"بلوط مدخّن", m3:"برونز مصقول", m4:"كتان منسوج",
    res_eye:"الوحدات السكنية", res_h:"اختر منظورك.",
    res_p:"ستة أنماط سكنية، صُمم كل منها حول الضوء والخصوصية والماء في الأفق.",
    r1:"غرفة واحدة", r2:"غرفتان", r3:"ثلاث غرف", r4:"دوبلكس", r5:"فيلا سماوية", r6:"بنتهاوس",
    from:"تبدأ من", sqft:"قدم مربع",
    explore_eye:"مستكشف الوحدات", explore_h:"قارن المجموعة.",
    explore_p:"مخططات مفاهيمية للتجربة الرقمية. المخططات والمواصفات النهائية تخضع للملف الخيالي للمشروع.",
    exp_view:"إطلالة على الماء", exp_detail:"معيشة مفتوحة · تراس خاص · زجاج كامل الارتفاع",
    exp_cta:"اطلب تفاصيل الوحدة",
    life_eye:"من أول ضوء إلى آخره", life_h:"صباحات على القناة. أمسيات فوقها.",
    life_p:"يبدأ الصباح بهدوء عند الماء. بعد الظهر تتحرك المدينة في الأسفل. وعند الغروب يصبح الأفق جزءاً من الغرفة.",
    loc_eye:"الموقع", loc_h:"على الماء، في قلب كل شيء",
    loc_p:"عنوان مائي خيالي على قناة دبي، يُقدَّم كقاعدة هادئة للوصول إلى مناطق المدينة الثقافية والتجارية والترفيهية.",
    d1:"وسط مدينة دبي", d2:"مركز دبي المالي", d3:"دبي مارينا", d4:"مطار دبي", d5:"شاطئ جميرا", min:"د",
    preview_eye:"معاينة خاصة", preview_h:"نظرة أولى محسوبة.",
    preview_p:"يتم تقديم المجموعة الأولى بشكل خاص. أخبرنا كيف تود أن تختبر آرفن.",
    f_name:"الاسم الكامل", f_email:"البريد الإلكتروني", f_phone:"الهاتف", f_res:"الوحدة المفضلة", f_msg:"هل من شيء نود معرفته؟",
    rsel:"اختر الوحدة", submit:"اطلب معاينة خاصة",
    note:"مشروع مفاهيمي. لا يتم إرسال أي شيء أو جمع أي بيانات شخصية.",
    sent:"شكراً. تم تسجيل طلب المعاينة الخاصة.",
    ftr_c:"المشروع", ftr_l:"مفاهيمي", ftr_f:"تابعنا",
    ribbon:"مشروع مفاهيمي مستقل · 2026 · غير معروض للبيع",
    legal:"آرفن مشروع سكني خيالي مقدم لأغراض التصميم والتقنية فقط. الصور مرجعية عامة وليست تصاميم للمشروع."
  }
};

const LS = {
  get(k){try{return localStorage.getItem(k)}catch{return null}},
  set(k,v){try{localStorage.setItem(k,v)}catch{}}
};
let lang = LS.get("arven-lang") || "en";
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-t]").forEach(el => {
    const k = el.dataset.t;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT") {
      el.setAttribute("aria-label", t(k));
    } else {
      el.textContent = t(k);
    }
  });
  const lb = document.getElementById("langBtn");
  if (lb) lb.textContent = lang === "ar" ? "EN" : "عربي";
}
export { T, LS, lang, t, applyLang };
export function toggleLang(){
  lang = lang === "ar" ? "en" : "ar";
  LS.set("arven-lang", lang);
}
