# Handoff

## Branch

v3/arven-experience

## Important files

- index.html — page story and semantic structure
- src/lib/i18n.js — EN/AR copy and language state
- src/config/images.js — all public image URLs
- src/modules/gl.js — hero shader
- src/modules/scroll.js — GSAP / Lenis choreography
- src/modules/residences.js — Residence Explorer state/events
- src/modules/v3-experience.js — Tower, Profile, Compare, Atelier, View Finder and Concierge interactions
- src/data/v3.js — V3 experience data
- src/styles/main.css — visual system and responsive layouts

## Image replacement

Drop approved local/project assets into public/assets/images/ and replace only the corresponding values in src/config/images.js.

## First checks

npm run dev
npm run build

Then inspect desktop and mobile for: hero image + shader, preloader handoff, Tower Navigator, Residence Profile, Compare, Material Atelier, View Finder, Concierge, horizontal interiors gallery, Club depth layers, language switch, menu/scroll lock and enquiry form.

## Concept disclosure

Keep the fictional-project disclosure until real project content and approvals exist.
