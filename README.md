# One Ok Studio

Single-page studio website built with Next.js App Router, TypeScript, Epilogue and GSAP / ScrollTrigger. Original assets are preserved in `D:\One Ok Studio\Assets`.

## Run locally

From `D:\One Ok Studio`:

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Production and checks

```powershell
npm run lint
npm run typecheck
npm run build
npm run test:e2e
npm run start
```

Browser tests use installed Microsoft Edge via Playwright. On another machine, install Edge or change the channel in `D:\One Ok Studio\playwright.config.ts`. Tests start the production server automatically; run a build first.

## Content

- Studio links and project/service data: `D:\One Ok Studio\src\data\studio.ts`.
- Page sections and copy: `D:\One Ok Studio\src\app\page.tsx`.
- Demo project artwork: `D:\One Ok Studio\src\components\ProjectVisual.tsx`.
- Motion: `D:\One Ok Studio\src\components\Motion.tsx`.
- Styles: `D:\One Ok Studio\src\app\globals.css` and `D:\One Ok Studio\src\app\visuals.css`.
- Progress checklist: `D:\One Ok Studio\TASKS.md`.

Project visuals are local HTML/CSS concept illustrations, not final screenshots. Replace the visual component with properly sized local images when real assets are supplied. Unverified pricing, statistics, social URLs and booking links are deliberately omitted. Inquiry CTAs use the actual studio email. They open a mail client; no mail delivery backend is included.

## Accessibility and motion

Native scrolling, visible keyboard focus, skip link, modal mobile navigation, reduced-motion support, touch-safe controls, and server-rendered readable content. Cursor enhancement never hides the native pointer. GSAP contexts and listeners are cleaned up on unmount/media changes.

## Launch requirements

Confirm content and booking/social URLs; replace concept artwork if desired; select hosting; inventory old URLs and redirects before changing DNS. Canonical and sitemap currently target https://www.oneokstudio.com. No deployment or DNS change has been performed.
