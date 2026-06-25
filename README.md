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
  App.tsx                Root: page routing (state-based), accent/font theming, tweaks panel
  styles.css             Full design system (carried over unchanged)
  types.ts               Shared types (PageId, Tweaks, etc.)
  hooks/useTweaks.ts      Live customization state
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

## Notes

- **Routing** is intentionally kept as simple page state (matching the original), no router dependency.
- The **Tweaks panel** (accent color, serif font, hero variant) was preserved and now opens via a
  floating toggle button in the bottom-right; it still responds to the original edit-mode host
  protocol when embedded.
# fortress-website
