# Changelog

## 1.0.0: from supplied archive to project
- **Source:** three loose files with `assets/...` links that did not exist -> Vite project, ES modules, npm dependencies.
- **Added:** Architecture, Amenities, Lifestyle sections; mobile menu; active nav; hero CTA; hero scroll-out; depth layers; pointer light and tilt; masked lifestyle reveal; focus-visible styles; image config.
- **Fixed:** Arabic hero split; hardcoded shader texture aspect; always-on cursor loop; unpaused WebGL; animated full-screen grain; per-frame manifesto class toggles; success shown on an invalid form.
- **Removed:** velocity skew, duplicate gallery counters, CDN script tags, middot/em-dash separators in copy.

## Audit pass
- **Verified:** dependencies installed, all JS syntax checks, production build, Vite HTTP smoke test, and npm audit (0 vulnerabilities).
- **Fixed:** descriptive alt text for content images; removed the obsolete `gsapOK` branch from scroll orchestration.
- **Deferred:** branding/content replacement remains intentionally untouched.
