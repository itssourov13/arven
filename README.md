# ARVEN Residences

A cinematic bilingual (English / Arabic, RTL-aware) luxury waterfront residence concept for a fictional Dubai Water Canal development.

## V2 direction

**ARVEN — Where the city meets stillness.**

V2 shifts the project from a generic luxury-property presentation into an editorial launch experience built around water, architecture, light, privacy, wellness, service and materiality. The existing GSAP / Lenis / Three.js foundation is preserved and extended rather than replaced.

## Experience

- Cinematic WebGL hero with a public Dubai reference image and CSS image base fallback.
- Editorial manifesto and tower/address story with scroll-linked depth.
- Architecture story built around The Turn, The Light and The View.
- Horizontal interiors gallery using public reference imagery.
- **The Club**: water, wellness, study and private dining experiences.
- **Materials**: travertine, smoked oak, brushed bronze and woven linen palette.
- Six residence types with an interactive **Residence Explorer**.
- Lifestyle chapter from first light to last light.
- Indicative location story and private-preview enquiry flow.
- English / Arabic language switching with RTL layout.
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
src/lib/                 i18n, environment flags, text splitting
src/modules/             cursor, nav, form, WebGL, scroll, explorer, etc.
src/styles/main.css      design system and responsive layouts
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
