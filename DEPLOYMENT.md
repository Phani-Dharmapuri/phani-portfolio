# 🚀 Deployment Guide - Vercel (Recommended)

## Why Vercel?

- **Free hosting** for Next.js apps
- **Automatic deployments** from GitHub
- **Built-in CI/CD**
- **Custom domains** included
- **Perfect for Next.js** (made by the same team)

## Step-by-Step Deployment

### 1. Push to GitHub

Your code is already committed. Now create a GitHub repository:

1. Go to https://github.com/new
2. Repository name: `phani-portfolio` (or any name you prefer)
3. Make it **Public** or **Private** (your choice)
4. **DO NOT** initialize with README (you already have one)
5. Click "Create repository"

Then run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/phani-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Select your `phani-portfolio` repository
6. Click "Import"

### 3. Configure Environment Variables

**IMPORTANT:** Before deploying, add your environment variable:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add:
   - **Name:** `WEB3FORMS_ACCESS_KEY`
   - **Value:** `4563a64e-f6e4-4d22-97c3-0fee67dc2524`
   - **Environment:** Production, Preview, Development (select all)
3. Click "Save"

### 4. Deploy!

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your site will be live at `https://phani-portfolio.vercel.app`

### 5. Custom Domain (Optional)

1. In Vercel, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `phanikumar.dev`)
3. Follow DNS configuration instructions
4. Done!

## 🔄 Automatic Updates

From now on, every time you push to GitHub:

- Vercel automatically rebuilds and redeploys
- Changes go live in ~2 minutes
- No manual steps needed!

## 📝 Making Changes

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys!
```

---

## Alternative: GitHub Pages (Static Export Only)

⚠️ **Note:** GitHub Pages won't work for the contact form API route, but you can export a static version:

1. Update `next.config.ts`:

```typescript
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  }
};
```

2. Build and deploy:

```bash
npm run build
# Upload the 'out' folder to GitHub Pages
```

**Limitation:** Contact form won't work without the API route. You'd need to use a third-party form service.

---

## 🎉 Recommended: Use Vercel!

Vercel is the easiest and best option for Next.js apps.
