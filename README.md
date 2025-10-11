# Phani Kumar - Portfolio Website

A modern, professional portfolio website showcasing 18 years of experience in Quality Engineering and Test Automation Leadership.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, TypeScript, and TailwindCSS
- **Interactive UI**: Cursor-following gradient effect inspired by modern portfolio designs
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Dark Theme**: Professional dark theme with blue/purple accents

## 📁 Project Structure

```
phani-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with Header, Footer, CursorEffect
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── skills/
│   │   └── page.tsx            # Skills & certifications page
│   ├── experience/
│   │   └── page.tsx            # Professional experience page
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   └── uwm-ai-underwriting/
│   │       └── page.tsx        # Detailed case study example
│   └── contact/
│       └── page.tsx            # Contact form page
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer component
│   └── CursorEffect.tsx        # Interactive cursor gradient effect
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel (recommended) or GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd phani-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

1. **Contact Details**: Edit `app/contact/page.tsx`
   - Update email, LinkedIn, GitHub links
   - Modify location information

2. **Profile Summary**: Edit `app/about/page.tsx`
   - Update bio and achievements
   - Modify expertise areas

3. **Experience**: Edit `app/experience/page.tsx`
   - Add/update job positions
   - Modify achievements and technologies

4. **Case Studies**: 
   - Edit `app/case-studies/page.tsx` for the listing
   - Create new folders under `app/case-studies/` for detailed case studies
   - Follow the pattern in `uwm-ai-underwriting` folder

### Styling

- Global colors: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Use Tailwind utility classes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### GitHub Pages

For static export (if needed):

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages

## 📄 Pages Overview

- **Home** (`/`): Hero section with key highlights and stats
- **About** (`/about`): Professional background and expertise
- **Skills** (`/skills`): Technical skills, certifications, and education
- **Experience** (`/experience`): Detailed work history with achievements
- **Case Studies** (`/case-studies`): In-depth project case studies
- **Contact** (`/contact`): Contact form and information

## 🎨 Design Features

- **Cursor Effect**: Interactive gradient that follows mouse movement
- **Gradient Accents**: Blue and purple gradient elements
- **Hover Effects**: Smooth transitions on cards and links
- **Responsive Grid**: Adapts to different screen sizes
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 📧 Contact

For questions or feedback about this portfolio:
- Email: phani@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 📜 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and TailwindCSS
