# Handoff

**Where things live:** markup `index.html` (sections have ids: tower, arch, interiors, amen, res, life, loc, enq); copy and Arabic `src/lib/i18n.js`; photos `src/config/images.js`; tokens and all CSS `src/styles/main.css`; motion `src/modules/scroll.js`; hero shader `src/modules/gl.js`.

**Add a section:** add markup with `data-t` keys, add EN/AR strings, style it, then add its ScrollTrigger in `scroll.js`. Use `.fade` and `.rv` classes for standard reveals.

**Add images:** put files in `public/assets/images/`, set the value in `images.js` to `/assets/images/name.jpg`.

**Verification completed:** `node --check` passes for all source JS; `npm run build` succeeds; `npm audit --omit=dev --audit-level=moderate` reports 0 vulnerabilities; Vite serves the home page and main module with HTTP 200. A real browser pass should still verify the hero shader/fallback, preloader handoff, horizontal gallery, mobile menu/scroll lock, and RTL interaction.
