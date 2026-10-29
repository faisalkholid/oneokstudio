# One Ok Studio — Implementation checklist

## Planning and assets
- [x] Read the six-page brief and inspect reference website content.
- [x] Confirm Next.js + GSAP, Epilogue, yellow #FFC700 and black #0C0C0C.
- [x] Inspect original logos in Assets; preserve original files.
- [x] Plan five-section page, responsive behavior, motion and accessibility.

## Implementation
- [x] Install dependencies and configure Next.js / TypeScript / ESLint.
- [x] Load local Epilogue and prepare original logo variants / favicon.
- [x] Create responsive navigation and accessible mobile menu.
- [x] Build Hero, About, Services, Works, Process and Contact.
- [x] Create local demo project visuals (not claimed as final client work).
- [x] Add GSAP reveals, parallax, process progress and cursor / magnetic CTA.
- [x] Add reduced-motion, keyboard and touch fallbacks.
- [x] Add metadata, social preview, robots and sitemap.
- [x] Add README and repeatable Playwright browser tests.

## Verification
- [x] Type checking — passed.
- [x] ESLint — passed without warnings.
- [x] Production build — passed, statically prerendered.
- [x] Local production HTTP smoke tests — page, metadata routes and logo assets passed.
- [x] Edge browser responsive tests — 360, 390, 768 and 1440px; no horizontal overflow or page errors detected.
- [x] Inspect desktop and mobile full-page screenshots.
- [x] Keyboard skip link, mobile focus trap, Escape and anchor navigation — passed.
- [x] Reduced motion and JavaScript-disabled content — passed.
- [x] All 9 Playwright tests passed after hero redesign, including scroll expansion and compact navbar regression.
- [x] Keffi-inspired hero revision: staggered entrance, desktop sticky expanding concept preview, compact floating navigation, mobile/reduced-motion fallbacks. Desktop top/expanded screenshots reviewed.
- [x] Production dependency audit — 0 reported vulnerabilities.
- [ ] Lighthouse / comprehensive contrast and performance audit.
- [ ] Safari, Firefox and physical touch-device verification.
- [ ] Dedicated cursor / magnetic pointer behavior regression tests.

## Content and launch dependencies
- [ ] Real booking URL (email inquiry used until available).
- [ ] Verified social links, statistics, pricing and response-time promise.
- [ ] Final project images, project links and UI Kit details.
- [ ] Owner review and revisions.
- [ ] Hosting, redirect inventory, domain and deployment verification.

No unverified metrics, fake booking links or success-only contact forms will be published.
