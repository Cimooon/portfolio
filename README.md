# Mohamed IBISSOU — Portfolio

Data Engineer portfolio website. Built with HTML, CSS, and JavaScript.

## Project structure

```
portfolio/
├── index.html          # Main page (keep at root for GitHub Pages)
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # Navigation & interactions
└── README.md           # This file
```

---

## How to add this to GitHub and show your website

### Step 1: Create a GitHub account (if needed)

1. Go to [github.com](https://github.com)
2. Sign up or log in

---

### Step 2: Create a new repository on GitHub

1. Click the **+** in the top-right → **New repository**
2. Repository name: `portfolio` (or `mohamed-ibissou`, `my-portfolio`, etc.)
3. Visibility: **Public**
4. Do **not** add a README, .gitignore, or license
5. Click **Create repository**

---

### Step 3: Push your project to GitHub

Open **Terminal** and run:

```bash
# Go to your portfolio folder
cd /Users/cimo/Desktop/Cursor/portfolio

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repo (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push
git push -u origin main
```

When asked for credentials, use your GitHub username and a **Personal Access Token** instead of your password.

To create a token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token.

---

### Step 4: Enable GitHub Pages (publish your site)

1. Open your repo on GitHub
2. Go to **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**: choose `main`, folder `/ (root)`
5. Click **Save**

---

### Step 5: Access your live site

After a few minutes (up to 5), your site will be available at:

**`https://YOUR_USERNAME.github.io/portfolio/`**

Example: `https://mohamedibissou.github.io/portfolio/`

You can add this URL to your LinkedIn, CV, or resume.

---

## Update your site later

After you change files in your portfolio:

```bash
cd /Users/cimo/Desktop/Cursor/portfolio
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically. Changes can take 1–2 minutes to appear.
