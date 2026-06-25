# Fortress — Music Studio

The Fortress Studios marketing site, rebuilt as a **Vite + React 18 + TypeScript** application.
This replaces the original in-browser Babel prototype (single `Fortress.html` loading `.jsx` files
off `window`) with a real, type-checked, bundled project.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
public/img/              Studio photography + logos
src/
  main.tsx               App entry point
  App.tsx                Root: BrowserRouter + routes, accent/font theming, tweaks panel
  styles.css             Full design system (carried over unchanged)
  types.ts               Shared types (PageId, Tweaks, etc.)
  routes.ts              PageId <-> URL path mapping
  hooks/useTweaks.ts      Live customization state
  hooks/useSetPage.ts     setPage(id) backed by react-router navigation
  data/gear.ts           Studio inventory data
  components/
    common.tsx           Img, Reveal (scroll-in), Parallax
    Nav.tsx              Top nav + mobile menu
    SideRail.tsx         Fixed side rail
    Footer.tsx           Site footer
    FinalCTA.tsx         Shared closing call-to-action
    GearBrowser.tsx      Tabbed gear inventory
    TweaksPanel.tsx      Reusable live-tweak panel + controls
  pages/
    Home.tsx             Home + hero variants (overlay / split / typed)
    Studio.tsx           The Studio
    Services.tsx         Services + process
    Gear.tsx             Equipment
    Contact.tsx          Contact + booking form
```

## Routing

`react-router-dom` (v6) with `BrowserRouter`. Routes: `/`, `/studio`, `/services`, `/gear`,
`/contact` (unknown paths redirect to `/`). The page components keep a simple `setPage(id)` prop,
which `useSetPage` maps onto `navigate(...)` — so URLs, the back button, and deep links all work.
`public/_redirects` (`/* /index.html 200`) gives Cloudflare Pages the SPA fallback for deep links.

The **Tweaks panel** (accent color, serif font, hero variant) was preserved and now opens via a
floating toggle button in the bottom-right; it still responds to the original edit-mode host
protocol when embedded.

## Deployment (Cloudflare Pages via GitHub Actions)

`.github/workflows/deploy.yml` builds and deploys on every push to `main` (PRs and other branches
get their own Cloudflare preview URL).

One-time setup:

1. **Create the Pages project** (once). Either let the first CI run create it, or in the Cloudflare
   dashboard create a Pages project named **`fortress`** (must match `--project-name` in the
   workflow). Set its **production branch** to `main`.
2. **Add repository secrets** in GitHub → Settings → Secrets and variables → Actions:
   - `CLOUDFLARE_API_TOKEN` — a token with the **Cloudflare Pages: Edit** permission.
   - `CLOUDFLARE_ACCOUNT_ID` — found on the Cloudflare dashboard home / Workers & Pages overview.
3. Push to `main`. The workflow runs `npm ci`, `npm run build`, then `wrangler pages deploy dist`.

To change the project name, edit `--project-name=fortress` in the workflow.
