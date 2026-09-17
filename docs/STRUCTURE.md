# STM Balance Website — Project Structure

```text
stm-balance-website/
├── .github/
│   └── workflows/
│       └── build.yml
│
├── docs/
│   └── STRUCTURE.md
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── overlay/
│   │   │   │   └── w.png
    │   │   │   └── slides/
    │   │   │       ├── mobile/
    │   │   │       │   ├── stm-balance-hero-mobile-01.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-02.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-03.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-04.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-05.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-06.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-07.jpg
    │   │   │       │   ├── stm-balance-hero-mobile-08.jpg
    │   │   │       │   └── stm-balance-hero-mobile-09.jpg
    │   │   │       ├── stm-balance-hero-01.jpg
│   │   │       ├── stm-balance-hero-02.jpg
│   │   │       ├── stm-balance-hero-03.jpg
│   │   │       ├── stm-balance-hero-04.jpg
│   │   │       ├── stm-balance-hero-05.jpg
│   │   │       ├── stm-balance-hero-06.jpg
│   │   │       ├── stm-balance-hero-07.jpg
│   │   │       ├── stm-balance-hero-08.jpg
│   │   │       └── stm-balance-hero-09.jpg
│   │   ├── product/
│   │   │   └── stm-balance-mockup.png
│   │   └── social/
│   │       ├── email.svg
│   │       ├── linkedin.svg
│   │       ├── stm-balance-social.jpg
│   │       ├── telegram.svg
│   │       └── x.svg
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── Company.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── HomePage.astro
│   │   ├── Institutions.astro
│   │   ├── Product.astro
│   │   ├── Team.astro
│   │   └── Technology.astro
│   ├── i18n/
│   │   ├── translations/
│   │   │   ├── company.ts
│   │   │   ├── contact.ts
│   │   │   ├── footer.ts
│   │   │   ├── hero.ts
│   │   │   ├── institutions.ts
│   │   │   ├── navigation.ts
│   │   │   ├── product.ts
│   │   │   ├── team.ts
│   │   │   └── technology.ts
│   │   ├── languages.ts
│   │   └── translations.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── de/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── es/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── fr/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── pt/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── ru/
│   │   │   ├── index.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── 404.astro
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── mobile.css
│
├── .gitignore
├── README.md
├── astro.config.mjs
└── package.json
```
_Last updated: 2026-09-17_

Design notes:
- Light STM palette (`#024b86`) lives in `src/styles/global.css` tokens.
- Layout and card composition were updated in section components; copy in `src/i18n/` was not changed.
- Responsive rules: `src/styles/mobile.css` (1100 / 900 / 700 / 480).
- Hero is capped at `--hero-max: 1200px`; desktop overlay uses viewport-capped type sizes.
- At `max-width: 900px` hero uses dedicated images (`864×1402`) with one shared crop (`cover` / `center`). Layout is sky/text band, phone, then a floor band for the dots. Phone size and placement match across all 9 slides; only the backdrop and in-phone UI change. Overlay (logo + copy + dots) stays in the banner.
