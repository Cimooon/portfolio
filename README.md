# Mohamed IBISSOU — Portfolio

Personal portfolio website inspired by modern developer portfolios. Dark theme, sidebar navigation, rotating hero text.

**Stack:** HTML, CSS, JavaScript (no framework).

---

## Features

- **Sidebar navigation** — Home, About, Skills, Education, Work, Experience, Contact
- **Hero** — “Hi There, I'm Mohamed IBISSOU” with rotating tagline (Data Engineer, Python, Azure, PySpark…)
- **About** — Short bio, email, location, Resume CTA
- **Skills** — Tag-style list (Python, Azure, Power BI, ETL, etc.)
- **Education** — Cards for Master degrees
- **Projects** — Project cards + “View All”
- **Experience** — Job cards + “View All”
- **Contact** — Get in touch + Submit button + social links
- **Footer** — Quick links, contact info, credit line
- **Responsive** — Sidebar collapses to hamburger menu on mobile

---

## Project structure

```
portfolio/
├── index.html          # Single page (keep at root for GitHub Pages)
├── css/
│   └── styles.css      # Dark theme, sidebar, cards
├── js/
│   └── script.js       # Rotating text, active nav, mobile menu
└── README.md
```

---

## Run locally

Open `index.html` in your browser, or use a local server:

```bash
cd path/to/portfolio
# Option 1: open in browser
open index.html

# Option 2: with Python
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## Deploy on GitHub Pages

### 1. Create a repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name: `portfolio` (or `mohamed-ibissou`)
3. Visibility: **Public**
4. Do **not** add README, .gitignore, or license
5. Click **Create repository**

### 2. Push your code

```bash
cd path/to/portfolio

git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Use your GitHub username and a **Personal Access Token** (not password) when prompted.

### 3. Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` — `/ (root)`
4. **Save**

### 4. Your live site

After a few minutes:

**`https://YOUR_USERNAME.github.io/portfolio/`**

---

## Update the site

```bash
cd path/to/portfolio
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically (1–2 minutes).

---

## Contact

**Mohamed IBISSOU** — Data Engineer  
ibissou.mohamed@gmail.com · Nanterre, France
