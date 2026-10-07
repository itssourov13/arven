# Current State

## V2 completed

- Rebranded the project to **ARVEN Residences**.
- Added the ARVEN visual/content system and bilingual brand voice.
- Reworked the hero, manifesto, tower/address, architecture and residence narratives.
- Added **The Club**, **Materials** and **Residence Explorer** chapters.
- Added private-preview form with residence preference.
- Migrated public imagery to a centralized Unsplash URL system.
- Hardened the hero so a normal CSS image remains visible even if WebGL texture loading or context fails.
- Added a real favicon and removed the browser-level favicon 404.
- Updated npm package name/version to `arven-residences@2.0.0`.
- Updated README and project docs for the V2 structure.

## Verification

- All source JS files pass `node --check`.
- `npm run build` succeeds.
- All public image URLs used by the concept returned HTTP 200 during verification.
- Browser smoke tests confirmed:
  - ARVEN branding is present and no legacy brand text remains in the rendered page.
  - Hero image loads with a non-zero natural width.
  - Residence Explorer switches from One Bedroom to Penthouse and updates plan/details.
  - Enquiry form is invalid before required fields are completed.
  - Language state switches to Arabic with RTL document direction.
- Desktop and mobile visual screenshots were inspected; hero composition and mobile title wrapping were refined accordingly.
- Headless Chrome reports software-WebGL warnings in this environment; the visual base image is intentionally independent of the shader.

## Remaining

- Replace public reference photography with commissioned/project renders when available.
- Final native Arabic editorial review.
- Final real browser interaction pass on a physical desktop/mobile device after deployment.
- Trademark/domain/legal clearance before treating ARVEN as a production identity.
