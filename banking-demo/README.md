# Banking Demo (React + Tailwind)

This folder contains a banking-style **multi-purpose money website template** built with React, Vite, and Tailwind CSS.

## Template sections

The app provides dedicated template views for:

- **Frontend** (customer web app structure)
- **Backend** (API/service architecture)
- **Admin** (operations console structure)

## New in this iteration

- Added **investment package cards** to the frontend template.
- Added a **wallet connect UI panel** (mock state flow with provider buttons).
- Expanded backend template data to include **investment + wallet APIs**.
- Expanded admin modules with **investment oversight**.
- Added a **go-live sidebar** with Namecheap DNS and hosting checklist guidance.

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

## Notes

- Wallet connect is a UI mock in this demo (not a live wallet integration).
- This is a sample dashboard for prototyping and learning.
- It intentionally avoids using real bank branding, logos, or proprietary assets.
