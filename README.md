# Harshit Kumar — Portfolio

[![CI Quality & Security Gates](https://github.com/mantisdarling/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mantisdarling/Portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000.svg?style=flat-square)](LICENSE)
[![Website](https://img.shields.io/badge/Website-mantisdarling.in-000000.svg?style=flat-square&logo=safari&logoColor=white)](https://mantisdarling.in)
[![Security: Hardened](https://img.shields.io/badge/Security-A%2B%20Hardened-000000.svg?style=flat-square&logo=shield&logoColor=white)](vercel.json)
[![Edge: Vercel](https://img.shields.io/badge/Deploy-Vercel%20Edge-000000.svg?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

The official personal portfolio of **Harshit Kumar** ([`mantisdarling`](https://github.com/mantisdarling)) — AI Systems Architect, Founder @ [MANTIS](https://mantisdarling.in), Google GEAR Fellow, IIT Madras (CS '30), NVIDIA Developer Program Member, and Security Researcher.

An ultra-minimalist, high-performance web experience inspired by monochrome monospace terminals, featuring real-time Hooke's Law canvas particle physics, an interactive Web Audio API synthesizer, and an enterprise defense-in-depth security posture.

---

## ⚡ Key Architectural Features

### 1. ⚛️ Real-Time Hooke's Law Canvas Particle Engine
* **Interactive Physics:** Interactive text elements and pixel art are broken into independent raster particles governed by damped spring physics ($F_{\text{spring}} = -k \cdot \Delta x$).
* **Cursor Deflection:** Radial repulsion vectors displace particles on pointer proximity, automatically snapping back to equilibrium.
* **0% Idle CPU Culling:** Non-visible and settled canvases are culled via `IntersectionObserver` and motion dirty-flags, maintaining 0mW idle battery draw on laptops and mobile devices.

### 2. 🧘 136.1 Hz Cosmic Om Synthesizer (Web Audio API)
* **Acoustic Harmonics:** Generates a peaceful drone calibrated to the Earth-year cosmic frequency (**136.10 Hz**) with a 5-oscillator harmonic stack:
  * `136.10 Hz` — Fundamental Om root sine
  * `136.35 Hz` — +0.25 Hz binaural shimmer overtone
  * `68.05 Hz` — Sub-bass grounding foundation
  * `272.20 Hz` — 1st harmonic overtone triangle
  * `408.30 Hz` — 5th overtone sine bell shimmer
* **Warm Filtering & LFO:** 380 Hz low-pass filter (Q: 2.0) modulated by a 0.15 Hz meditative breathing envelope.
* **Seamless Audio Lifecycle:** Attempts immediate ambient playback upon visitor arrival with an interaction-gesture fallback, plus a 1.8s smooth exponential fade toggle bound to the topmost `ॐ` in the navbar.

### 3. 🔤 5×7 Dot-Matrix Pixel Typography
* Proprietary ASCII bitmap rasterizer mapping 77 custom 5×7 matrix characters.
* Real-time text wrapping, character spacing, and particle extraction without layout shifts.
* Dual typography rendering supporting Google Font `VT323` and pure binary bitmap dots.

### 4. 🛡️ Enterprise Defense-in-Depth Security
* **Content Security Policy (CSP):** Strict script, style, font, and telemetry origin whitelisting via [`vercel.json`](vercel.json), preventing client-side XSS.
* **Zero Reverse Tabnabbing:** 100% of outbound anchor tags (`target="_blank"`) enforce `rel="noreferrer"`.
* **Clickjacking & MIME Defense:** Hardened HTTP headers including `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff`.
* **Transport Security:** HTTP Strict Transport Security (`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`).
* **Zero Supply-Chain Risk:** Zero external npm client dependencies; standalone zero-bloat architecture.

### 5. 🔍 Semantic SEO & Web Accessibility
* **Schema.org JSON-LD:** Structured graph entities (`Person` and `WebSite`) enabling Google Knowledge Graph recognition.
* **Screen Reader Accessibility:** All canvas particle elements include mirror `.sr-only` DOM nodes and `aria-label` attributes for 100% search crawler indexability and assistive screen reader support.
* **Crawler Directives:** Production-ready [`sitemap.xml`](sitemap.xml) and [`robots.txt`](robots.txt).
* **Social Previews:** Complete Open Graph and Twitter/X Card metadata.

---

## 📂 Repository Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions automated CI/CD pipeline
├── scripts/
│   └── audit.js              # 7-point enterprise health & security test runner
├── artwork.jpg               # Developer pixel art source asset
├── index.html                # Compiled zero-dependency production distribution
├── LICENSE                   # MIT open-source license
├── README.md                 # Project documentation & architecture guide
├── robots.txt                # Search engine crawler indexing directives
├── sitemap.xml               # Canonical XML sitemap
└── vercel.json               # Vercel edge configuration, CSP, and HTTP security headers
```

---

## 🚀 Running Locally

Because the project is built with zero client-side dependencies, no installation or compilation is required.

### Quick Start
Open `index.html` directly in any modern browser, or spin up a lightweight local server:

```bash
# Using Node.js npx
npx serve .

# Or using Python 3
python -m http.server 3000
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 🧪 Automated CI/CD & Testing

The repository includes a comprehensive 7-point automated verification suite executed on every push and pull request via GitHub Actions:

```bash
node scripts/audit.js
```

### Verification Checks:
1. **Core Artifacts:** Validates presence and size of `index.html`, `robots.txt`, `sitemap.xml`, and `vercel.json`.
2. **HTML Tag Balance:** Confirms 100% balanced semantic DOM opening/closing tags.
3. **Anchor Security:** Enforces `rel="noreferrer"` on all outbound links to prevent reverse tabnabbing.
4. **Sanitization:** Scans for accidental leaks of local filesystem paths (`C:\Users\...`) or private tokens.
5. **Structured Data:** Validates Schema.org JSON-LD syntax against standard schemas.
6. **JavaScript Engine:** Performs V8 engine syntax parsing with zero runtime or syntax errors.
7. **Security Headers:** Validates that CSP, HSTS, X-Frame-Options, and X-Content-Type-Options are properly configured.

---

## 🌐 Deployment

### Vercel (Recommended)
The repository is pre-configured with [`vercel.json`](vercel.json) for automatic deployment on the Vercel Anycast Edge Network:
1. Push this repository to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Select **Other** as the framework preset and deploy.

### GitHub Pages
1. Navigate to **Settings** > **Pages** in the GitHub repository.
2. Set source to **Deploy from a branch** and select `main` / `/ (root)`.
3. Save to deploy.

---

## 📬 Contact & Links

* **Portfolio:** [mantisdarling.in](https://mantisdarling.in)
* **Primary Email:** [`admin@mantisdarling.in`](mailto:admin@mantisdarling.in)
* **GitHub:** [@mantisdarling](https://github.com/mantisdarling)
* **LinkedIn:** [/in/mantisdarling](https://linkedin.com/in/mantisdarling)
* **X (Twitter):** [@mantisxdarling](https://twitter.com/mantisxdarling)
* **Google Developer:** [g.dev/mantisdarling](https://g.dev/mantisdarling)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).