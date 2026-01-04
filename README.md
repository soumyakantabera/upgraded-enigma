# Soumyakanta Bera - Portfolio Website

A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a unique "Sketchbook Terminal" design aesthetic with graph paper backgrounds and hand-drawn elements.

## 🚀 Features

### Design Concept
- **Graph Paper Background**: Subtle grid pattern throughout the site
- **Sketch-Style Borders**: Hand-drawn SVG borders using the `SketchWrapper` component
- **Terminal Blocks**: Code-like displays for financial formulas (WACC, NPV)
- **Handwritten Accents**: Comic Sans font for annotations and highlights
- **Clean Typography**: Professional sans-serif fonts for content

### Pages
- **Home**: Hero section with animated text and call-to-action buttons
- **About**: Personal story and skills categorized by Financial, Technical, and Tools
- **Experience (Deal Room)**: Timeline view of professional journey
- **Projects**: Grid showcase of portfolio projects
- **Risk Lab**: Interactive DCF calculator and financial formula displays
- **Certifications**: Professional credentials and continuous learning
- **Contact**: Contact form with social media links

### Technology Stack
- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: lucide-react
- **Components**: Custom components mirroring shadcn/ui structure

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── certifications/      # Certifications page
│   ├── contact/            # Contact page
│   ├── experience/         # Experience timeline
│   ├── projects/           # Projects showcase
│   ├── risk-lab/           # Interactive financial tools
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # UI primitives (button, card, input, etc.)
│   ├── layout/             # Layout components (Navbar)
│   ├── SketchWrapper.tsx   # Hand-drawn border component
│   └── TerminalBlock.tsx   # Terminal-style code display
├── config/
│   └── profile.ts          # User profile data
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Update Profile Data
Edit `config/profile.ts` to customize:
- Personal information
- Experience history
- Projects
- Certifications
- Skills
- Social links

### Modify Colors
Update the Tailwind theme in `tailwind.config.ts` and CSS variables in `app/globals.css`.

### Add New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update the navigation in `components/layout/Navbar.tsx`

## 🔧 Key Components

### SketchWrapper
Wraps content with hand-drawn SVG borders:
```tsx
<SketchWrapper>
  <h2>Your Content</h2>
</SketchWrapper>
```

### TerminalBlock
Displays code/formulas in terminal style:
```tsx
<TerminalBlock
  title="WACC Formula"
  formula="WACC = (E/V × Re) + (D/V × Rd × (1-Tc))"
  description="Weighted Average Cost of Capital"
/>
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Soumyakanta Bera
- LinkedIn: [linkedin.com/in/soumyakantabera](https://linkedin.com/in/soumyakantabera)
- GitHub: [github.com/soumyakantabera](https://github.com/soumyakantabera)
- Email: soumyakanta@example.com

---

Built with ❤️ using Next.js and Tailwind CSS
