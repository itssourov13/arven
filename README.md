# ARVEN Residences

A cinematic bilingual (English / Arabic, RTL-aware) luxury waterfront residence concept for a fictional Dubai Water Canal development.

## V3 direction

**ARVEN — Where the city meets stillness.**

V3 turns the editorial launch experience into an immersive digital residence suite. The existing GSAP / Lenis / Three.js foundation is preserved while the experience adds an interactive tower, residence profiles, comparison, material atelier, view finder, wellness/service narratives, day-at-ARVEN timeline, editorial notes and a local concept concierge.

## Experience

- Cinematic WebGL hero with a public Dubai reference image and CSS image base fallback.
- Editorial manifesto and tower/address story with scroll-linked depth.
- Architecture story built around The Turn, The Light and The View.
- Horizontal interiors gallery using public reference imagery.
- **The Club**: water, wellness, study and private dining experiences.
- **Materials**: travertine, smoked oak, brushed bronze and woven linen palette.
- Six residence types with an interactive **Residence Explorer**.
- **Tower Navigator** linking levels to the residence collection.
- **Residence Profile** detail layer and side-by-side **Compare** view.
- **Material Atelier** for interactive palette exploration.
- **View Finder** for water, skyline, terrace and night moods.
- **The Ritual** wellness chapter and **The Service** hospitality layer.
- **A Day at ARVEN** timeline and **ARVEN Notes** editorial layer.
- **The Light** cycle from dawn to night and a **Signature Residence** Penthouse chapter.
- **Ask ARVEN** local concept concierge with curated answers.
- Lifestyle chapter from first light to last light.
- Indicative location story and private-preview enquiry flow.
- English / Arabic language switching with RTL layout, including dynamic V3 content.
- Reduced-motion support, keyboard focus states and responsive mobile composition.

## Stack

| Package | Role |
|---|---|
| Vite | dev server and production build |
| GSAP + ScrollTrigger | scroll choreography and reveals |
| Lenis | smooth scrolling |
| Three.js | hero shader / atmospheric motion |
| Vanilla JS | page modules and interaction |

## Structure

```
index.html
src/main.js
src/config/images.js
src/data/v3.js            V3 residence, tower, material, journal and concierge data
src/lib/                  i18n, environment flags, text splitting
src/modules/              cursor, nav, form, WebGL, scroll, explorer, V3 interactions, etc.
src/styles/main.css       design system and responsive layouts
public/favicon.svg
docs/                    project context, architecture, state and handoff
```

## Public imagery

The concept uses public Unsplash image URLs so the visual system can be evaluated without a local asset package. URLs are centralized in `src/config/images.js`; project-specific renders can replace them later without changing section markup.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Concept disclosure

ARVEN is fictional and presented for design / technology demonstration only. The photography is public reference imagery and does not represent actual project renders, specifications or availability.
