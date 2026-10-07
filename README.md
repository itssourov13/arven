# Alvenar Residences

A cinematic, bilingual (English / Arabic, RTL-aware) luxury real-estate site for a fictional 42-storey tower on the Dubai Water Canal. Vanilla JavaScript on Vite: no framework, because the page is one scroll narrative with no client-side state worth a component tree.

## Stack
| Package | Role |
|---|---|
| `vite` (dev) | dev server, bundling, hashed assets |
| `gsap` (+ ScrollTrigger) | scroll choreography: reveals, pins, scrubbed masks, horizontal gallery |
| `lenis` | smooth scrolling, driven from GSAP's ticker |
| `three` | hero WebGL shader (cover-fit photo, haze, pointer parallax) |

## Structure
```
index.html            semantic markup, one <section> per story beat
src/main.js           entry: resolves images, applies language, boots modules
src/config/images.js  every photo URL, keyed (swap to local files here)
src/lib/              env flags, i18n dictionary (EN/AR), text splitting
src/modules/          cursor, magnetic, gl, scroll, preloader, nav, pointer, form
src/styles/main.css   design tokens + all styles
public/assets/images/ place local images here (served at /assets/images/...)
docs/                 context, state, architecture, decisions, tasks, changelog, handoff
```

## Features
Preloader and hero intro, WebGL hero with CSS fallback, manifesto word-by-word reveal, tower stats counters, architecture plane with pointer perspective, pinned horizontal interiors gallery, layered-depth amenities, residence cards with pointer light, full-bleed masked lifestyle reveal, location, enquiry form, EN/AR switch, full-screen mobile menu (staggered, Esc, scroll lock), reduced-motion support.

## Commands
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/
npm run preview   # serves dist/ locally
```
`npm install` also creates `package-lock.json`; commit it.

## Notes
- Photos are Unsplash links by default (needs internet). Fonts load from Google Fonts in `index.html`.
- Production: deploy `dist/` to any static host. Three.js is split into its own chunk.
- The site is marked `noindex` (fictional development). Remove that meta tag for a real launch.
