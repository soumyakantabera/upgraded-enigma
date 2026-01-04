# Quick Start Guide

This guide will help you get the portfolio up and running quickly.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Building for Production

```bash
npm run build
npm start
```

## Customizing Your Portfolio

### 1. Update Your Information

Edit `config/profile.ts` to add your own:
- Name and headline
- Bio and education
- Work experience
- Projects
- Skills
- Certifications
- Social media links

### 2. Customize Colors

Edit `app/globals.css` to change the color scheme. Look for CSS variables under `:root`.

### 3. Modify Pages

Each page is in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/experience/page.tsx` - Experience timeline
- `app/projects/page.tsx` - Projects showcase
- `app/risk-lab/page.tsx` - Interactive tools
- `app/certifications/page.tsx` - Certifications
- `app/contact/page.tsx` - Contact form

### 4. Update Metadata

Edit `app/layout.tsx` to change the site title and description.

## Key Features

### Interactive DCF Calculator
Located in Risk Lab (`app/risk-lab/page.tsx`), this tool allows visitors to:
- Input cash flow parameters
- Calculate enterprise value
- See real-time valuation results

### SketchWrapper Component
Add hand-drawn borders to any content:
```tsx
<SketchWrapper>
  <p>Your content here</p>
</SketchWrapper>
```

### TerminalBlock Component
Display code or formulas in a terminal-style block:
```tsx
<TerminalBlock title="filename.js">
  <code>Your code here</code>
</TerminalBlock>
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The built files are in `.next/` after running `npm run build`.

## Need Help?

Check the main README.md for detailed documentation.
