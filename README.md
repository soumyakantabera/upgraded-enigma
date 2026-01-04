# Soumyakanta Bera - Portfolio

A modern portfolio website showcasing finance, risk analytics, and AI expertise with a unique "Sketchbook Terminal" design aesthetic.

## 🎨 Design Concept

Clean, modern UI with hand-drawn doodles/annotations aesthetics on a graph paper background, combining professional finance content with creative visual elements.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Icons**: lucide-react
- **Components**: Custom components mirroring shadcn/ui structure

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── certifications/      # Certifications page
│   ├── contact/             # Contact form page
│   ├── experience/          # Experience timeline
│   ├── projects/            # Projects showcase
│   ├── risk-lab/            # Interactive financial tools
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with graph paper bg
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── badge.tsx
│   ├── layout/
│   │   └── Navbar.tsx       # Navigation component
│   ├── SketchWrapper.tsx    # Hand-drawn border effect
│   └── TerminalBlock.tsx    # Terminal-style code blocks
├── config/
│   └── profile.ts           # User profile data
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── tailwind.config.ts       # Tailwind configuration

```

## 🎯 Features

### Pages
- **Home**: Hero section with animated text, CTAs, and quick stats
- **About**: Personal bio, skills snapshot grid, and education
- **Experience**: "Deal Room" style timeline of professional experience
- **Projects**: Grid of project cards with tech stacks and features
- **Risk Lab**: Interactive DCF calculator and finance formulas
- **Certifications**: Professional certifications and credentials
- **Contact**: Contact form and social links

### Components
- Custom UI components following shadcn/ui patterns
- Hand-drawn sketch borders for annotations
- Terminal-style blocks for finance formulas
- Responsive navigation bar

### Visual Elements
- Graph paper background pattern
- Smooth Framer Motion animations
- Hand-drawn aesthetic accents
- Clean typography with handwritten font highlights

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Customization

### Update Profile Data
Edit `config/profile.ts` to update:
- Personal information
- Experience entries
- Projects
- Skills
- Certifications
- Social links

### Modify Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

## 🎨 Color Scheme

The portfolio uses a professional color scheme defined in CSS variables:
- Background: Light with subtle grid pattern
- Primary: Dark blue (`hsl(222.2 47.4% 11.2%)`)
- Secondary: Light blue-gray
- Accent: Subtle blue tones

## 📦 Dependencies

### Core
- `next`: ^14.2.0
- `react`: ^18.3.0
- `react-dom`: ^18.3.0
- `typescript`: ^5.3.0

### UI & Styling
- `tailwindcss`: ^3.4.0
- `framer-motion`: ^11.0.0
- `lucide-react`: ^0.344.0
- `clsx`: ^2.1.0
- `tailwind-merge`: ^2.2.0
- `class-variance-authority`: ^0.7.0

### Data Visualization
- `recharts`: ^2.12.0

## 🔒 Security

The project includes security scanning via CodeQL and has been verified to have no security vulnerabilities in the codebase.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Soumyakanta Bera**
- Finance & Risk + Analytics + AI
- MSc Finance & Risk Management
- M&A Experience • Quant + Dashboards

---

Built with ❤️ using Next.js and TypeScript
