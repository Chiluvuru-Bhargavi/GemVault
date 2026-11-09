# GemVault — Official Landing Page & Technical Docs

> **Surgical Shorts Interception. Zero-Bypass Lockdown.**  
> An open-source, anti-tamper digital discipline and YouTube Shorts blocker built in native Kotlin.

---

## 🌟 Live Demo & Architecture

This repository hosts the static marketing and documentation site for **GemVault**. It is engineered as a zero-build, ultra-fast static website ready for immediate deployment on **GitHub Pages**.

### Key Technical Characteristics
* **Zero-Build Architecture**: Pure semantic HTML5, modern CSS3 design tokens, and vanilla ES6 JavaScript. No Node.js, Webpack, Vite, or post-processors required.
* **GitHub Pages Native**: 100% relative links and asset paths (`./`). Deploys cleanly from the root `/` or `/docs` branch.
* **Obsidian Vault Design System**: Near-black palette (`#010102` to `#08090A`), 1px luminous hairlines (`rgba(255, 255, 255, 0.08)`), and semantic accents (Vault Indigo, Monotonic Emerald, Intercept Crimson, Aegis Lavender).
* **Pure-CSS & Vanilla JS Phone Mockup**: Interactive simulation of `ShortsBlockerService.kt` intercepting vertical 9:16 Shorts with `GLOBAL_ACTION_BACK` while permitting horizontal 16:9 lectures.
* **Asymmetric Security Bento Grid**: Visualizing time-travel defense with live monotonic hardware clock counters (`SystemClock.elapsedRealtime()`), deterministic memory recycling (`.recycle()`), and automated privilege teardown.

---

## 🚀 Quick Start / Local Preview

To preview the website locally without installing any dependencies:

### Python 3:
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Node.js (npx serve):
```bash
npx serve .
```

### Direct Browser:
You can also directly double-click and open `index.html` in any modern web browser.

---

## 📦 Deploying to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial GemVault landing page release"
   git branch -M main
   git remote add origin https://github.com/username/gemvault.git
   git push -u origin main
   ```
2. Navigate to your repository settings on GitHub:  
   **Settings > Pages > Build and deployment > Source**
3. Select **Deploy from a branch**, choose the **`main`** branch and the **`/ (root)`** directory, then click **Save**.
4. Your site will be live at `https://<username>.github.io/gemvault/` within 60 seconds!

---

## 📂 Project Structure

```text
.
├── index.html           # Semantic HTML5 marketing & documentation
├── styles.css           # Custom CSS variables, responsive bento grid, phone mockup
├── app.js               # Zero-dependency vanilla ES6 interactivity & simulation
├── README.md            # Repository documentation and deployment guide
└── assets/
    └── favicon.svg      # GemVault geometric vault gemstone icon
```

---

## 📄 License

This website and the GemVault application are released under the [MIT License](LICENSE).
