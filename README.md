# Bejies Joseph — Personal Portfolio & Systems Dossier

> Modern, high-performance developer portfolio and technical dossier built for **Bejies Joseph**, B.Tech Artificial Intelligence & Data Science student at KCG College of Technology, Chennai.

---

## ⚡ Tech Stack & Architecture

- **Framework**: React 19 + TypeScript (strict mode)
- **Styling**: Tailwind CSS + Custom token-based color hierarchy
- **Bundler**: Vite 6 (ultra-fast build and tree-shaking)
- **Icons**: Lucide Icons + Custom SVG Brand components
- **Assets**: Embedded local official `resume.pdf` and verified certificate PDFs/images
- **Design Philosophy**: Minimalist, high visual contrast, distraction-free typography, and responsive UX optimized for 30-second recruiter scans.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified by Vite).

### 3. Production Build
```bash
npm run build
```
This runs TypeScript type checking (`tsc`) and compiles optimized static assets into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub: `git push origin main`
2. Connect your GitHub repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 📂 Project Structure

```
├── public/
│   ├── resume.pdf                    # Official resume document for one-click download
│   └── certificates/                 # Verified certificates (PDFs and JPEGs)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive navigation with resume CTA
│   │   ├── Hero.tsx                  # Recruiter elevator pitch, quick metrics, CTAs
│   │   ├── About.tsx                 # Engineering philosophy & principles
│   │   ├── Skills.tsx                # Categorized verified technical stack
│   │   ├── Projects.tsx              # Deep architectural breakdowns of flagship projects
│   │   ├── ExperienceEducation.tsx   # Offline internship & academic milestones
│   │   ├── Certificates.tsx          # Curated credentials with verification links
│   │   ├── CertificateModal.tsx      # Modal document preview & external verification
│   │   ├── Contact.tsx               # Direct channels, one-click copy, privacy notice
│   │   ├── Footer.tsx                # Clean footer navigation
│   │   └── Icons.tsx                 # Custom SVG brand icons
│   ├── data/
│   │   └── portfolioData.ts          # Centralized data model for easy updates
│   ├── App.tsx                       # Main application shell
│   ├── main.tsx                      # Application mount point
│   └── index.css                     # Tailwind directives & smooth styling
├── index.html                        # SEO metadata, OpenGraph tags, web fonts
├── tailwind.config.js                # Design tokens & color system
├── tsconfig.json                     # Strict TypeScript configuration
└── vite.config.ts                    # Vite configuration
```

---

## 🛡️ Strategic Content Curation & Decision Rationale

### What Was Highlighted (And Why):
1. **Marginalia — AI Academic Research Assistant**:
   - Demonstrates production-grade AI engineering (RAG, FAISS vector indexing, PyMuPDF chunking, Celery/Redis asynchronous workers, FastAPI, and Docker).
2. **Interview Prep Backend**:
   - Demonstrates relational data design (SQLAlchemy/MySQL), JWT authentication, and structured Gemini API prompt engineering.
3. **Numota Technology Offline Internship (Jun–Jul 2026)**:
   - Verified team software engineering engagement (Reg. No. 9124243009).
4. **NPTEL SWAYAM Database Management System (75% Proctored National Exam)**:
   - Proves deep relational database rigor, transactions, and normalization.
5. **Infosys Springboard Advanced MERN & Software Engineering**:
   - Validates formal full-stack development and SDLC foundations.
6. **FutureSkills Prime (NASSCOM / MeitY) Exploratory Data Analysis**:
   - Directly complements B.Tech in AI & Data Science.

### What Was Intentionally Excluded / Archived (And Why):
- **Udemy Python for Beginners & Udemy HTML/CSS**: Excluded from primary display because beginner tutorial completions dilute the senior credibility established by the Numota Technology software internship and production RAG backend.
- **Microsoft Copilot Learnathon**: Excluded because generic end-user tool usage does not demonstrate software engineering competency.
- **Infosys CLI & Operating System Commands**: Excluded from credentials section because CLI and Linux competency is already demonstrated through Docker and backend project workflows.
- **Personal Phone Number & Residential Address**: Omitted from public web indexing to protect candidate privacy and security; replaced with a prominent copyable professional email and LinkedIn/GitHub links.
