# 🚀 Pradeep Maurya — Cinematic 3D Developer Portfolio

A modern, high-performance, responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Three.js**, converted directly from the Google Stitch design:

---

## 🌟 Key Features

1. **Interactive 3D Particle Cursor Trail**
   * Real-time canvas particle engine tracking pointer trajectory with 3D z-depth perspective, upward drift physics, color twinking, and click burst effects.
   * Mobile touch-screen compatible (`touchmove` event handling).

2. **Custom Magnetic Follower Cursor & Spotlight**
   * Physics-interpolated follower ring and glowing purple spotlight tracking the cursor across cards.

3. **Interactive Three.js 3D Viewport Sculpture**
   * WebGL 3D scene in the Hero section featuring a frosted translucent icosahedron, an inner iridescent geometric gem, orbiting metallic rings, and floating bobbing spheres with mouse parallax.

4. **Component-Based Architecture (`src/app/` & `src/components/`)**
   * All sections are cleanly separated into modular components and called inside `src/app/page.tsx`:
     - `ScrollProgress`: Top glowing gradient scroll progress bar.
     - `CustomCursor`: Magnetic follower cursor and radial spotlight.
     - `ParticleCursor`: 3D particle canvas trail.
     - `AmbientBackground`: Drifting pastel blobs and ambient micro-particles.
     - `Navbar`: Monogram, navigation links, "Available for Work" live badge, and mobile drawer menu.
     - `Hero`: High-impact headline, resume bio, quick metrics, social pills, and Hero3D sculpture.
     - `Marquee`: Infinite ticker of technical skills and architectures.
     - `About`: Detailed bio, core philosophies ("Zero Compromise Core" & "Real-Time Systems"), and 4 bento stat counters with animated numbers.
     - `Skills`: Bento grid categorized into Frontend Architecture & UI, Backend & REST APIs, Databases & Real-Time IoT, and Security, DevOps & Tooling.
     - `Projects`: Interactive showcase of Employee Management System (EMS), Wonderlust, HRMS Portal (Atri Systems), and IoT Telemetry Platform.
     - `Experience`: Career chronology (Software Engineer & Intern at Atri Systems, MERN Intern at CreArt) and Academic milestones (B.E. Computer Engineering at GEC Modasa).
     - `Certificates`: Google Cloud Study Jams 2023 & IEEE TIC-TECH-TOE '25.
     - `Contact`: Direct Transmission Protocol with instant clipboard copy, phone, location, category selectors, and message dispatch.
     - `Footer`: Clean off-white footer with latency metric, navigation, and ascend button.

5. **Tailored to Resume**
   * Experience, skills, projects, and contact info directly aligned with Pradeep Maurya's resume.

---

## 📁 Downloaded Stitch Assets
* `stitch-screen.html`: Full raw code extracted from Google Stitch.
* `stitch-screenshot.png`: Full resolution design screenshot from Stitch.
* `public/images/ems.png`: Employee Management System dashboard image.
* `public/images/wonderlust.png`: Wonderlust rental ecosystem image.
* `public/images/hrms.png`: HRMS portal stepper interface image.
* `public/images/stitch-preview.png`: Full design preview image.

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)

An automated continuous integration & deployment workflow is configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

* **Triggers**: On every `push` or `pull_request` to `main`, and manual execution via `workflow_dispatch`.
* **CI Quality Gate**:
  1. Checks out repository (`actions/checkout@v4`).
  2. Sets up Node.js 20 with npm caching (`actions/setup-node@v4`).
  3. Installs dependencies cleanly (`npm ci`).
  4. Runs TypeScript type-checking (`npx tsc --noEmit`).
  5. Compiles production static site (`npm run build` into `./out`).
* **CD Automated Deployment (GitHub Pages)**:
  * Automatically uploads the static build artifact (`actions/upload-pages-artifact@v3`).
  * Deploys directly to GitHub Pages (`actions/deploy-pages@v4`).

### Enabling GitHub Pages for Auto-Deployment:
1. Open your repository on GitHub (`https://github.com/Pradeep2532/Portfolio`).
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push your commits to `main` — GitHub Actions will automatically run the pipeline and deploy your portfolio live!
