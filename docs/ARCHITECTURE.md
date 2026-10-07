# Architecture

The runtime remains a lightweight Vite + ES modules site.

## Boot flow

index.html loads src/main.js, which resolves centralized image keys, applies language state, initializes the WebGL hero, V2 interaction modules, the V3 experience layer, Residence Explorer and scroll choreography.

## Modules

- lib/env.js — reduced-motion / touch detection
- lib/i18n.js — EN/AR dictionary and RTL state
- lib/text.js — hero / manifesto text splitting
- modules/gl.js — Three.js hero atmosphere and texture parallax
- modules/scroll.js — Lenis, ScrollTrigger, pins, reveals and depth motion
- modules/residences.js — interactive residence selector and state events
- modules/v3-experience.js — Tower Navigator, Residence Profile, Compare, Material Atelier, View Finder, Light Cycle and Concierge
- data/v3.js — shared V3 experience data
- modules/nav.js — mobile menu, anchors and active state
- modules/form.js — local-only enquiry validation/success state
- modules/cursor.js, magnetic.js, pointer.js — desktop interaction polish
- modules/preloader.js — intro sequence

## Data strategy

V3 experience content is centralized in src/data/v3.js so residence facts, tower levels, materials, journal prompts and concierge answers can evolve without scattering content across interaction code.

## Image strategy

The hero always has a normal CSS image base. Three.js is an enhancement layer, so a shader texture failure or WebGL context loss does not remove the primary visual. V3 reference imagery remains centralized in src/config/images.js.

## Responsive strategy

Desktop uses editorial multi-column compositions and layered depth. At mobile widths, sections collapse intentionally, the hero title remains word-safe, Tower Navigator controls become a compact list, Explorer tabs remain touch-friendly, and the larger visual chapters retain cinematic framing.

## Accessibility

Images have descriptive alt text where meaningful, decorative hero imagery is hidden from assistive technology, form fields retain labels, focus-visible states are present, and reduced-motion mode falls back to static reveals.
