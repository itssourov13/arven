export const V3_RESIDENCES = {
  one: {
    floor: "08–15", beds: "1", baths: "1.5", size: "812–940 sq ft",
    orientation: "South-east", view: "Water-facing", terrace: "Private terrace",
    price: "AED 2.15M",
    rooms: [
      ["Living", "Open-plan living with full-height glazing."],
      ["Suite", "Quiet principal suite with a canal-facing outlook."],
      ["Kitchen", "Integrated kitchen with a compact breakfast setting."],
      ["Terrace", "A shaded outdoor room for morning light."]
    ]
  },
  two: {
    floor: "16–22", beds: "2", baths: "2.5", size: "1,310–1,580 sq ft",
    orientation: "East", view: "Canal & skyline", terrace: "Shaded terrace",
    price: "AED 3.42M",
    rooms: [
      ["Living", "Dual-aspect living composed around the horizon."],
      ["Principal Suite", "Private suite with soft morning light."],
      ["Kitchen", "Generous kitchen with a separate service zone."],
      ["Terrace", "Deep terrace with filtered afternoon shade."]
    ]
  },
  three: {
    floor: "23–27", beds: "3", baths: "3.5", size: "1,940–2,260 sq ft",
    orientation: "South-east", view: "Corner water view", terrace: "Expansive water terrace",
    price: "AED 5.18M",
    rooms: [
      ["Arrival", "A private arrival sequence with a generous foyer."],
      ["Living", "Corner living with two directions of water."],
      ["Family Room", "An intimate room that can close away from entertaining."],
      ["Terrace", "A wide outdoor room for long-table evenings."]
    ]
  },
  duplex: {
    floor: "28–34", beds: "4", baths: "4.5", size: "3,100–3,480 sq ft",
    orientation: "South", view: "Panoramic water", terrace: "Two terraces",
    price: "AED 8.90M",
    rooms: [
      ["Arrival", "Private lift lobby with gallery-like entry."],
      ["Great Room", "Double-height living and dining sequence."],
      ["Study", "Quiet work room separated from the entertaining floor."],
      ["Terraces", "Two outdoor levels facing the water and skyline."]
    ]
  },
  villa: {
    floor: "40–42", beds: "4", baths: "5.5", size: "5,240 sq ft",
    orientation: "South-west", view: "Skyline + canal", terrace: "Sky garden",
    price: "AED 16.4M",
    rooms: [
      ["Arrival", "A private arrival with direct lift access."],
      ["Sky Garden", "Landscape becomes another room above the city."],
      ["Sunset Lounge", "Low, calm seating composed for golden hour."],
      ["Principal Suite", "A private retreat with a broad skyline horizon."]
    ]
  },
  penthouse: {
    floor: "38–39", beds: "5", baths: "6.5", size: "7,860 sq ft",
    orientation: "South-west", view: "Uninterrupted horizon", terrace: "Roof terrace concept",
    price: "AED 29.0M",
    rooms: [
      ["Arrival", "Private lift arrival opening into a quiet gallery."],
      ["Entertaining Floor", "Living, dining and kitchen arranged for long evenings."],
      ["Principal Suite", "A full private zone facing the changing horizon."],
      ["Roof Terrace", "A conceptual outdoor room above the city."]
    ]
  }
};

export const V3_TOWER = [
  { floor: "42", label: "Sky Villa", key: "villa", note: "The highest private residence" },
  { floor: "38", label: "Penthouse", key: "penthouse", note: "A private horizon above the city" },
  { floor: "31", label: "Duplex", key: "duplex", note: "Two levels, one continuous view" },
  { floor: "24", label: "Sky Garden", key: "three", note: "A planted terrace within the collection" },
  { floor: "16", label: "Residences", key: "two", note: "Light-filled canal-facing homes" },
  { floor: "08", label: "Residences", key: "one", note: "A quieter beginning to the collection" }
];

export const V3_MATERIALS = {
  travertine: {
    label: "Travertine", sub: "Warm limestone / tactile",
    copy: "A softly honed stone that catches changing daylight rather than competing with it.",
    bg: "linear-gradient(135deg,#cbbba2 0%,#8e806e 38%,#dfd3c0 68%,#a99983 100%)"
  },
  oak: {
    label: "Smoked Oak", sub: "Dark timber / quiet grain",
    copy: "Deep timber tones bring weight and warmth to the calmer rooms of the residence.",
    bg: "linear-gradient(135deg,#2e221b,#6c4e36 52%,#201914)"
  },
  bronze: {
    label: "Brushed Bronze", sub: "Metal / softened reflectivity",
    copy: "A muted metal note used for hardware, joinery details and the edges between materials.",
    bg: "linear-gradient(135deg,#514633,#b18b5c 48%,#372d22)"
  },
  linen: {
    label: "Woven Linen", sub: "Textile / soft diffusion",
    copy: "A pale woven texture that keeps the palette tactile and naturally imperfect.",
    bg: "linear-gradient(135deg,#d6cdbd,#aea596 48%,#e7e0d5)"
  }
};

export const V3_JOURNAL = [
  {
    no: "01", title: "Designing for stillness",
    dek: "Why the most valuable luxury can be the feeling of nothing asking for your attention.",
    tag: "Architecture"
  },
  {
    no: "02", title: "Light as architecture",
    dek: "A residence changes when the day moves through it. ARVEN is composed for that movement.",
    tag: "Interiors"
  },
  {
    no: "03", title: "Life beside water",
    dek: "The canal is not a backdrop. It becomes the rhythm that spaces are designed around.",
    tag: "Lifestyle"
  },
  {
    no: "04", title: "A quieter material palette",
    dek: "Stone, timber, bronze and linen meet without competing for attention.",
    tag: "Materials"
  }
];

export const V3_TIMELINE = [
  ["06:10", "First light", "The canal catches the first reflection before the city is fully awake."],
  ["08:30", "Breakfast", "Morning light enters deep into the living spaces."],
  ["12:40", "The Club", "Water, recovery and the slower middle of the day."],
  ["17:20", "The Horizon", "The city changes colour and the terrace becomes the room."],
  ["21:45", "After dark", "Private dining, quiet rooms and the skyline beyond the glass."]
];

export const V3_CONCIERGE = [
  {
    q: "Which residence has the largest terrace?",
    a: "The Penthouse is the most expansive concept residence and includes a roof terrace concept."
  },
  {
    q: "What is the difference between the Sky Villa and Penthouse?",
    a: "The Sky Villa is positioned at the top of the tower with a sky garden, while the Penthouse is composed around a larger entertaining floor and roof terrace concept."
  },
  {
    q: "What is inside The Club?",
    a: "The Club is organised around water, wellness, study and private dining, with a quieter service layer behind the residences."
  },
  {
    q: "What is ARVEN made from?",
    a: "The core material palette is travertine, smoked oak, brushed bronze and woven linen."
  }
];
