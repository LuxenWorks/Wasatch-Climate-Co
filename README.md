# Wasatch Climate Co. — Website Source Code

**Business:** Wasatch Climate Co.  
**Domain:** wasatchclimateco.com  
**Address:** 1551 S 400 E, American Fork, UT 84003  
**Phone:** (385) 200-2308  

A fully portable, static-hosting-friendly React + Vite website. No server required. No Manus dependencies. Deploys to Cloudflare Pages, Netlify, Vercel, or any static host.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI) |
| Routing | Wouter (client-side SPA) |
| Fonts | Google Fonts (Barlow Condensed, Source Sans 3) |
| Icons | Lucide React |

---

## Local Development

### Prerequisites

- **Node.js 18 or higher** — [nodejs.org](https://nodejs.org)
- **pnpm** (recommended) — `npm install -g pnpm`
  - Or use `npm` or `yarn` — all work fine.

### Steps

```bash
# 1. Clone or unzip the project
git clone https://github.com/YOUR_USERNAME/wasatch-climate-co.git
cd wasatch-climate-co

# 2. Install dependencies
pnpm install
# or: npm install

# 3. Start the development server
pnpm dev
# or: npm run dev

# 4. Open in browser
# http://localhost:3000
```

The dev server supports hot module replacement (HMR). Changes to any `.tsx`, `.ts`, or `.css` file reload instantly.

---

## Production Build

```bash
pnpm build
# or: npm run build
```

**Build command:** `pnpm build` (or `npm run build`)  
**Output directory:** `dist`  
**Node version:** 18 or higher

The build output in `dist/` is a fully self-contained static site. Every file is hashed for cache-busting. Images are served from `dist/images/`.

To preview the production build locally:

```bash
pnpm preview
# Opens at http://localhost:4173
```

---

## Cloudflare Pages Deployment

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Wasatch Climate Co. website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wasatch-climate-co.git
git push -u origin main
```

### Step 2 — Create Cloudflare Pages Project

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository
4. Configure the build settings:

| Setting | Value |
|---|---|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave blank) |
| **Node.js version** | `18` (set in Environment Variables as `NODE_VERSION = 18`) |

5. Click **Save and Deploy**

### Step 3 — Add Custom Domain

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `wasatchclimateco.com`
3. If your domain is already on Cloudflare DNS, it will auto-configure
4. Also add `www.wasatchclimateco.com` and set it to redirect to the apex domain

### Environment Variables (Optional)

No environment variables are required for the basic site. If you add analytics:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `18` |

---

## SPA Routing — Cloudflare Pages

This site uses **client-side routing** (Wouter). The `_redirects` file in `client/public/` handles this automatically for Cloudflare Pages:

```
/* /index.html 200
```

This file is already included. No additional configuration needed.

---

## Adding Analytics

The `client/index.html` contains a placeholder comment for analytics. Replace it with your preferred provider:

**Option A — Cloudflare Web Analytics (free, privacy-first):**
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_CF_TOKEN"}'></script>
```
Get your token: Cloudflare Dashboard → **Analytics & Logs** → **Web Analytics** → **Add a site**

**Option B — Google Analytics 4:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → **Domain** → enter `wasatchclimateco.com`
3. Verify via DNS TXT record (easiest with Cloudflare DNS)
4. Submit `https://wasatchclimateco.com/sitemap.xml`

---

## Updating Content

All content is in the React component files under `client/src/pages/`:

| File | Content |
|---|---|
| `pages/Home.tsx` | Homepage — hero, services, reviews, FAQ |
| `pages/Services.tsx` | Services overview page |
| `pages/ServiceDetail.tsx` | Individual service pages (AC, Furnace, etc.) |
| `pages/ServiceAreas.tsx` | Service areas overview |
| `pages/LocationDetail.tsx` | Individual city pages |
| `pages/About.tsx` | About page |
| `pages/Contact.tsx` | Contact page with lead form |
| `pages/Blog.tsx` | Blog/resource center |
| `components/Header.tsx` | Navigation, phone number, top bar |
| `components/Footer.tsx` | Footer links, address, hours |

**To update the phone number** — search for `385` across all files and replace with the new number.  
**To update the address** — search for `1551 S 400 E` and replace.  
**To add images** — place files in `client/public/images/` and reference as `/images/filename.jpg`.

---

## Project Structure

```
wasatch-climate-co/
├── client/
│   ├── index.html          ← Entry HTML, SEO meta, schema.org, fonts
│   ├── public/
│   │   ├── images/         ← All site images (self-contained)
│   │   ├── _redirects      ← Cloudflare Pages SPA routing rule
│   │   ├── _headers        ← Cloudflare Pages security headers
│   │   ├── robots.txt      ← Search engine crawl rules
│   │   ├── sitemap.xml     ← XML sitemap for all pages
│   │   └── favicon.ico     ← Favicon (replace with your own)
│   └── src/
│       ├── App.tsx         ← Routes
│       ├── index.css       ← Global styles, Tailwind, brand tokens
│       ├── components/     ← Shared components (Header, Footer, CTASection)
│       ├── pages/          ← Page components
│       ├── contexts/       ← React contexts
│       ├── hooks/          ← Custom hooks
│       └── lib/            ← Utilities
├── shared/
│   └── const.ts            ← Shared constants
├── package.json
├── tsconfig.json
├── vite.config.ts          ← Clean build config, no Manus plugins
└── README.md
```

---

## Deployment Checklist

- [ ] **Domain DNS** — Point `wasatchclimateco.com` to Cloudflare nameservers
- [ ] **GitHub repo** — Push source code to `main` branch
- [ ] **Cloudflare Pages** — Connect repo, set build command `npm run build`, output `dist`
- [ ] **Custom domain** — Add `wasatchclimateco.com` in Cloudflare Pages settings
- [ ] **www redirect** — Add `www.wasatchclimateco.com` → redirect to apex
- [ ] **Analytics** — Add Cloudflare Web Analytics or Google Analytics token to `index.html`
- [ ] **Google Search Console** — Verify domain, submit `sitemap.xml`
- [ ] **Google Business Profile** — Update website URL to `https://wasatchclimateco.com`
- [ ] **Test SPA routing** — Visit `/services`, `/about`, `/contact` directly (should not 404)
- [ ] **Test mobile** — Check on iPhone/Android for responsive layout
- [ ] **Test phone links** — Tap `(385) 200-2308` on mobile to confirm `tel:` link works
- [ ] **Replace favicon** — Add your actual favicon to `client/public/`
- [ ] **Schema.org** — Verify structured data at [schema.org/docs/gs.html](https://schema.org/docs/gs.html)

---

## License

All content, copy, and design belong to **Wasatch Climate Co.** All rights reserved.
