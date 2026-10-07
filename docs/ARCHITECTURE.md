# Architecture

The runtime remains a lightweight Vite + ES modules site.

## Boot flow

`index.html` loads `src/main.js`, which resolves centralized image keys, applies language state, initializes the WebGL hero, interaction modules, Residence Explorer and scroll choreography.

## Modules

- `lib/env.js` — reduced-motion / touch detection
- `lib/i18n.js` — EN/AR dictionary and RTL state
- `lib/text.js` — hero / manifesto text splitting
- `modules/gl.js` — Three.js hero atmosphere and texture parallax
- `modules/scroll.js` — Lenis, ScrollTrigger, pins, reveals and depth motion
- `modules/residences.js` — interactive residence selector
- `modules/nav.js` — mobile menu, anchors and active state
- `modules/form.js` — local-only enquiry validation/success state
- `modules/cursor.js`, `magnetic.js`, `pointer.js` — desktop interaction polish
- `modules/preloader.js` — intro sequence

## Image strategy

The hero always has a normal CSS image base. Three.js is an enhancement layer, so a shader texture failure or WebGL context loss does not remove the primary visual.

## Responsive strategy

Desktop uses editorial multi-column compositions and layered depth. At mobile widths, sections collapse intentionally, the hero title remains word-safe, Club layers stack, Explorer tabs become a compact grid, and full-bleed lifestyle imagery remains cinematic.

## Accessibility

Images have descriptive alt text where meaningful, decorative hero imagery is hidden from assistive technology, form fields retain labels, focus-visible states are present, and reduced-motion mode falls back to static reveals.
