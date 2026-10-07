# Architecture

**Flow:** `index.html` loads `src/main.js`, which imports the stylesheet, resolves `data-img` keys to URLs, applies the language dictionary to `[data-t]` nodes, then boots modules in order: GL, cursor, magnetic, form, scroll, nav, pointer, preloader. The preloader finishes by calling `window.__introTL`, set in `scroll.js`, to play the hero intro.

**Modules**
- `lib/env.js` reduced-motion and touch flags. `lib/i18n.js` EN/AR dictionary, `t()`, `applyLang()`, direction. `lib/text.js` char/word splitters (Arabic splits by word to keep letters joined).
- `modules/scroll.js` Lenis + ScrollTrigger: reveals, counters, manifesto, pinned horizontal gallery, hero scroll-out, amenity depth layers, masked lifestyle frame. Falls back to plain reveals when reduced motion is on.
- `modules/gl.js` one ShaderMaterial on a full-screen quad; renders only while visible and tab-visible.
- `modules/nav.js` mobile menu, smooth anchors, active link via IntersectionObserver, residence pointer light. `pointer.js` perspective tilt for `.tilt`.

**Assets:** all photos by key in `config/images.js`; local files go in `public/assets/images/`. **Dependencies:** three runtime packages, split into `three` and `motion` chunks. **Responsive:** `clamp()` type, breakpoints at 1000px and 620px, deliberate mobile layouts for amenities and lifestyle, lower WebGL DPR and no pointer effects on touch.
