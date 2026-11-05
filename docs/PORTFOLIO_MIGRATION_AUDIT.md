# PORTFOLIO MIGRATION AUDIT & BACKEND SECURITY REPORT
**Developer:** Sampatakumar V  
**Audit Date:** November 2026  
**Scope:** Evaluation of all links, backend dependencies, forms, and services from `sampatakumar.github.io` to the new Next.js Architecture.

---

## 1. Migration Status Matrix for All Discovered Links

| Link / Asset | Original Target | New Implementation | Status | Reason & Implementation Notes |
|---|---|---|---|---|
| **Root Website** | `https://sampatakumar.github.io/` | `https://sampatakumar.github.io/` (or Vercel custom domain) | **PRESERVED** | Canonical URL maintained; canonical metadata configured in `layout.jsx`. |
| **GitHub Profile** | `https://github.com/sampatakumar` | `https://github.com/sampatakumar` | **PRESERVED** | Primary open-source identity. Consumed from centralized `profile.js`. |
| **LinkedIn Profile** | `https://www.linkedin.com/in/sampatakumar-sv` | `https://www.linkedin.com/in/sampatakumar-sv` | **PRESERVED** | Professional networking. Centralized in `profile.js`. |
| **Primary Email** | `mailto:sampatakumarsv@gmail.com` | `mailto:sampatakumarsv@gmail.com` | **PRESERVED** | Direct communication. Enhanced with 1-click clipboard copy + feedback toast. |
| **WhatsApp Direct** | `https://wa.me/919380395607` | `https://wa.me/919380395607` | **PRESERVED** | Quick inquiry link with pre-composed query message hooks. |
| **Direct Phone** | `tel:+919380395607` | `tel:+919380395607` | **PRESERVED** | Direct phone inquiry option in centralized profile configuration. |
| **Resume PDF** | `/Sampatakumar.pdf` | `/Sampatakumar.pdf` | **PRESERVED** | Copied verified vector PDF to `/public`. Download link enabled in navbar, hero, about, and contact. |
| **Profile Photo** | `/profile.png` | `/profile.png` | **PRESERVED** | High-resolution authentic portrait migrated to `/public` and rendered via Next.js `Image`. |
| **Avatar Photo** | `/avatar.png` | `/avatar.png` | **PRESERVED** | Used for favicon, OpenGraph fallback, and author credentials. |
| **SSH Live Demo** | `https://smartskillhub.vercel.app` | `https://smartskillhub.vercel.app` | **PRESERVED** | Flagship live application link in project cards and case study. |
| **SSH Source** | `https://github.com/sampatakumar/SSH-final-year-project` | `https://github.com/sampatakumar/SSH-final-year-project` | **PRESERVED** | Flagship repository link. |
| **ResumeAI Demo** | `https://resumeaidev.vercel.app` | `https://resumeaidev.vercel.app` | **PRESERVED** | Top project live demo. |
| **ResumeAI Source** | `https://github.com/sampatakumar/ResumeAI` | `https://github.com/sampatakumar/ResumeAI` | **PRESERVED** | Top project repository. |
| **Git Reviewer Demo** | `https://git-reviewer-beta.vercel.app` | `https://git-reviewer-beta.vercel.app` | **PRESERVED** | Top project live demo. |
| **Git Reviewer Source**| `https://github.com/sampatakumar/git-reviewer` | `https://github.com/sampatakumar/git-reviewer` | **PRESERVED** | Top project repository. |
| **EduConnect Demo** | `https://educonnect25.vercel.app/` | `https://educonnect25.vercel.app/` | **PRESERVED** | Full-stack project live demo. |
| **EduConnect Source**| `https://github.com/sampatakumar/Full-stack-event` | `https://github.com/sampatakumar/Full-stack-event` | **PRESERVED** | Full-stack project repository. |
| **Noirwave Demo** | `https://noirwave1.vercel.app` | `https://noirwave1.vercel.app` | **PRESERVED** | Web Audio project live demo. |
| **The World Chronicle**| `https://theworldchronicle.vercel.app/`| `https://theworldchronicle.vercel.app/`| **PRESERVED** | AI newspaper live demo. |
| **Krishi Kendra Demo** | `https://krishi-kendra1.vercel.app/` | `https://krishi-kendra1.vercel.app/` | **PRESERVED** | Agri-commerce live demo. |
| **Neo Tab Theme Store**| `https://microsoftedge.microsoft.com/...` | `https://microsoftedge.microsoft.com/...` | **PRESERVED** | Browser extension store link. |
| **Auralis Mobile Repo**| `https://github.com/sampatakumar/auralis` | None (documented in research) | **EXCLUDED FROM SHOWCASE** | Repository contains zero commits on GitHub. Not ready for production showcase. |
| **Collaboration Form**| `POST https://sampatakumar.vercel.app/api/collab` | Native Next.js App Router Route Handler `/api/collab` | **UPDATED & SECURED** | Refactored into a write-only serverless endpoint. GET endpoint removed to prevent data leakage. |
| **Public Comments API**| `https://sampatakumar.vercel.app/api/comments` | Blog static content + optional client storage | **UPDATED** | Comments decoupled from unauthenticated public write loops. |
| **Unsplash Placeholders**| Scattered generic Unsplash stock photos | Replaced with authentic screenshots (`resumeai.png`, `agri.png`, `home.png`) and SVG blueprints | **UPDATED** | Enhanced authenticity and eliminated generic stock imagery. |

---

## 2. Backend Dependencies & Security Audit (Collaboration Form)

### Inspection of Legacy `api/collab.js`
In the existing codebase, `api/collab.js` handled collaboration requests with the following implementation:
```javascript
// Legacy api/collab.js
const uri = process.env.MONGODB_URI || 'mongodb+srv://sampatakumarsv_db_user:...@cluster0.srnjnss.mongodb.net/portfolioblogs';

// CRITICAL SECURITY RISK IN LEGACY CODE:
if (req.method === 'GET') {
  const requests = await collabCollection.find({}).sort({ createdAt: -1 }).limit(50).toArray();
  return res.status(200).json({ success: true, count: requests.length, requests: requests.map(...) });
}
```

### Vulnerability Identified & Remediation
1. **Critical Privacy Leak:** The legacy `GET /api/collab` endpoint returned up to 50 raw submission records containing visitor names, private emails, and phone/WhatsApp numbers to any anonymous visitor or web crawler.
2. **Hardcoded MongoDB URI Fallback:** The legacy file contained hardcoded MongoDB credentials in the source code.
3. **Remediation in New Architecture:**
   - **Deprecate Public GET:** The new Next.js route handler (`src/app/api/collab/route.js`) strictly supports `POST` for receiving submissions. `GET` requests return `405 Method Not Allowed`.
   - **Environment Isolation:** The database connection strictly requires `process.env.MONGODB_URI`. No plaintext credentials are saved in repository source files.
   - **Input Sanitization & Validation:** Strict validation of fields (`name`, `contact`, `projectTitle`, `description`) with length constraints, rate limiting, and HTML tag sanitization to prevent injection attacks.
   - **Client-Side Fallback:** If the database environment variable is not configured in local development, the form gracefully saves to client `localStorage` with a clear, polite status indicator so no visitor submission is ever lost.

---

## 3. Preservation of SEO, Social, and Agency Entities

1. **JSON-LD Structured Data:**
   - Transferred complete `Person`, `ProfilePage`, `WebSite`, and `ProfessionalService` schemas into Next.js metadata and script tags.
   - Preserved agency identity `SV Digital Solutions` (`https://sampatakumar.github.io/services`).
2. **OpenGraph & Twitter Card:**
   - Generates dynamic tags with `/avatar.png` preview, UTF-8 descriptions, and canonical URLs.
3. **Google Site Verification:**
   - Preserved meta tokens `google99665a0428bf1f0e.html` and `CsY5j_qZzQC5AkwgFQmX6dfiKJY6wXgdFZcwfEGQHEo`.

