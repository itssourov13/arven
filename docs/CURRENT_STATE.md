# Current State

## Completed
- Converted loose `index.html` / `site.css` / `site.js` (whose asset paths were broken) into a Vite project with ES modules.
- Split the 600-line script into `lib/` and `modules/` by responsibility; CDN script tags replaced by npm imports.
- Added sections: Architecture, Amenities, Lifestyle. Fixed the nav (desktop active state, mobile menu).
- Image URLs centralised in `src/config/images.js`; images lazy-load with `decoding="async"`.
- Fixes: Arabic letter-joining in hero split, texture aspect ratio in shader, cursor loop only while moving, WebGL paused when tab hidden, DPR capped lower on touch, static grain, manifesto updates only changed words, form validates before success.

## Verification status
**Verified in workspace:** dependencies are installed; all source JS files pass `node --check`; `npm run build` succeeds; `npm audit --omit=dev --audit-level=moderate` reports 0 vulnerabilities; the Vite dev server responds with HTTP 200 for `/` and `/src/main.js`. The project currently exposes only `dev`, `build`, and `preview` scripts, so there is no dedicated lint/typecheck command. A real browser visual/interaction pass remains manual.

## Audit fixes
- Added descriptive `alt` text to previously empty content-image attributes.
- Removed the dead `gsapOK` branch from `scroll.js` and kept reduced-motion fallback explicit.
- Kept the existing noindex/fictional-project and branding/content placeholders unchanged for the later branding pass.

## Known gaps
- Photography is hotlinked stock; replace with project renders.
- The hero was not re-composed beyond the earlier CTA and scroll-out; the remaining sections keep the original typographic scale with a refinement layer at the end of `main.css`.
- Arabic copy is machine-quality; have a native editor review it.
