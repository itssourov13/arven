# Decisions

1. **Vite + vanilla JS, no framework.** The site has almost no state; sections are static markup animated by scroll. A framework would add weight without a structural benefit.
2. **npm packages instead of CDN scripts.** Version pinning, tree-shaking, one bundle pipeline, and offline development.
3. **Modules by responsibility, not by section.** Behaviours (scroll, GL, nav) are cross-cutting; sections remain markup in `index.html` plus CSS.
4. **Images keyed in one config.** Replacing stock photography with local renders is a one-line change per image.
5. **Pseudo-3D over more WebGL.** Depth in amenities, architecture and lifestyle uses transforms and masks: cheaper on mobile and easier to maintain.
6. **Translations in JS, markup stays semantic.** `data-t` keys keep one HTML file for both languages; language switch reloads to rebuild split text cleanly.
7. **Skew-on-velocity removed.** Reads as gimmick and costs per-frame work.
