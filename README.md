# Hasini Doddigarla — Personal Portfolio & Creative Vault

A modern, responsive personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Quick Start (Run Locally on Your Machine)

### 1. Prerequisites
Make sure you have **Node.js** (v18 or later) installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Open your terminal in this project directory and run:
```bash
npm install
```
*(Tip: If you ever see a peer dependency conflict on older npm versions, use `npm install --legacy-peer-deps`)*

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```
*(or the URL shown in your terminal)*

---

## 🛠️ Build for Production
To create an optimized production build:
```bash
npm run build
```
This outputs production-ready static assets into the `dist/` folder. You can test the production build locally with:
```bash
npm run preview
```

---

## 📦 How to Push to GitHub

1. Initialize a git repository (if not already done):
```bash
git init
```

2. Add all files and commit:
```bash
git add .
git commit -m "Initial commit: Hasini Doddigarla Portfolio with Palette Theme"
```

3. Create a new repository on GitHub:
   - Go to [GitHub](https://github.com/new)
   - Repository name (e.g. `hasini-portfolio` or `Hasini-501.github.io`)
   - Keep it **Public** and do NOT initialize with README/license (since you already have them).

4. Link and push to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/Hasini-501/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 🌐 How to Deploy (Free & Instant)

### Option A: Vercel (Recommended — 1 click)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Done!

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your repository.
4. Build command: `npm run build`, Publish directory: `dist`.
5. Click **"Deploy site"**.

### Option C: GitHub Pages
1. In `vite.config.ts`, if your repository is `https://github.com/Hasini-501/portfolio-name`, set:
   ```ts
   base: '/portfolio-name/',
   ```
   *(If deploying to `Hasini-501.github.io`, leave `base: '/'`)*.
2. Run `npm install -D gh-pages`.
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```
├── public/                 # Static assets, images, resume PDF
├── src/
│   ├── components/         # Modular UI components (Hero, About, Projects, Navbar, etc.)
│   ├── context/            # Theme & Photo Contexts (Theme palettes, profile picture editor)
│   ├── data/               # Portfolio credentials, projects, certifications & education data
│   ├── App.tsx             # Root layout & page composition
│   ├── main.tsx            # Vite entry point
│   ├── types.ts            # TypeScript interfaces & types
│   └── index.css           # Tailwind CSS imports & theme palette tokens
├── index.html              # HTML entry point with metadata
├── package.json            # Project dependencies & scripts
├── vite.config.ts          # Vite configuration
└── README.md               # Documentation & setup guide
```
