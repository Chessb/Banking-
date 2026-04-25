# Banking Demo (React + Tailwind)

This folder contains a banking-style **multi-purpose money website template** built with React, Vite, and Tailwind CSS.

## Template sections

The app provides dedicated template views for:

- **Frontend** — Customer web app structure, investment package cards, and a mock wallet-connect UI panel.
- **Backend** — API/service architecture with investment and wallet API stubs.
- **Admin** — Operations console structure including investment oversight.
- **Sidebar** — Go-live guidance with Namecheap DNS quick map, hosting checklist, and a recommended next-step decision card.

## Code organization

Templates are split into focused files for easier extension:

- `src/components/templates/FrontendTemplate.jsx`
- `src/components/templates/BackendTemplate.jsx`
- `src/components/templates/AdminTemplate.jsx`
- Shared UI card in `src/components/ui/Card.jsx`
- Shared template data in `src/data/templates.js`

## Run locally

```bash
cd banking-demo
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Domain setup notes (Namecheap)

### If your site is frontend-only

Use a static host like **GitHub Pages**, **Vercel**, or **Netlify**. In this case, the VPS is optional and usually not needed.

> **GitHub Pages + Vite note:** If you deploy to a GitHub Pages **project site** such as `https://user.github.io/repo/`, set Vite's `base` to the repository path so built asset URLs resolve correctly. For example, set `base: '/repo/'` in `vite.config.js`, or build with `vite build --base=/repo/`. If you deploy at the domain root (e.g. `https://user.github.io/` or a custom domain), an explicit `base` is usually not required.

### If your site includes backend runtime

Use your VPS (or another server runtime provider) for APIs and background jobs. Point DNS to the VPS public IP and secure it with HTTPS.

### Typical Namecheap DNS records

- `A` record: host `@` → your host IP (or provider-provided IP)
- `CNAME` record: host `www` → root domain or provider target

### Verify DNS

```bash
nslookup yourdomain.com
nslookup www.yourdomain.com
```

## What next (recommended order)

1. **Launch frontend first** on Vercel/Netlify/GitHub Pages (fastest way to go live).
2. **Connect Namecheap domain** to your chosen host and enable SSL.
3. **Only use VPS when backend is ready** (APIs, auth, database jobs, webhooks).
4. **Move backend endpoints behind your domain** (e.g. `api.yourdomain.com`) after VPS hardening.

### Quick launch checklist

```bash
# 1) test and build locally
npm install
npm run build

# 2) after DNS changes, verify propagation
nslookup yourdomain.com
nslookup www.yourdomain.com
```

## Notes

- Wallet connect is a UI mock in this demo (not a live wallet integration).
- This is a sample dashboard for prototyping and learning.
- It intentionally avoids using real bank branding, logos, or proprietary assets.
