# PORTFOLIO DEPLOYMENT STRATEGY & RUNTIME SPECIFICATION
**Developer:** Sampatakumar V  
**Date:** November 2026  
**Target Environments:** Vercel (Recommended Production) & GitHub Pages (Static Hosting Alternative)

---

## 1. Primary Recommended Deployment: Vercel

### Rationale
Next.js App Router applications are natively optimized for Vercel. Deploying on Vercel delivers:
- **Serverless API Route Handlers:** Enables the secure `/api/collab` endpoint to write directly to MongoDB Atlas without exposing database credentials or visitor records.
- **Dynamic Image Optimization (`next/image`):** Automatically converts PNG/JPEG images into modern AVIF/WebP formats with responsive size variants.
- **Edge Routing & Analytics:** Sub-50ms TTFB worldwide via Vercel's Edge Network.
- **Zero Configuration Needed:** Next.js builds natively on Vercel with automatic framework detection (`next build`).

### Environment Variables for Vercel
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.srnjnss.mongodb.net/portfolioblogs?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=https://sampatakumar.vercel.app
```

---

## 2. GitHub Pages Alternative: Static HTML Export

### Operational Considerations
GitHub Pages only serves static files (`index.html`, CSS, JS, images). It does **not** support Node.js server runtimes or serverless API routes.

If static export to GitHub Pages (`sampatakumar.github.io`) is desired:
1. Configure `next.config.mjs`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true // GitHub Pages lacks dynamic image optimization servers
     },
     trailingSlash: true
   };
   export default nextConfig;
   ```
2. **API Route Handling in Static Mode:**
   - The `/api/collab` route handler cannot run on GitHub Pages.
   - The collaboration form is engineered with an automatic client-side fallback: when deployed statically, submissions are safely stored in browser `localStorage` and a direct WhatsApp link (`wa.me`) is provided so visitors can send their proposal directly to Sampatakumar.

---

## 3. Production Verification Checklist

Before deploying:
- [ ] Run `npm run build` locally to verify zero build errors or broken imports.
- [ ] Verify all routes (`/`, `/projects`, `/projects/ssh-hub`, `/projects/resume-ai`, `/projects/git-reviewer`, `/blog`) compile cleanly.
- [ ] Verify all links to GitHub, LinkedIn, WhatsApp, email, and resume open accurately.
- [ ] Verify image assets in `/public` load without 404s.
- [ ] Verify dynamic sitemap and robots directives are active.
- [ ] Confirm no private MongoDB URI or secrets are stored in Git history.

