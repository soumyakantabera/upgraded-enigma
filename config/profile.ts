export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  headline: string;
  subheadline: string;
  bio: string;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  skills: string[];
  socialLinks: SocialLink[];
}

export const profile: Profile = {
  name: "Soumyakanta Bera",
  headline: "Finance & Risk + Analytics + AI",
  subheadline: "MSc Finance & Risk Management • M&A experience • Quant + dashboards",
  bio: "Finance professional with expertise in M&A, risk management, and quantitative analysis. Combining financial acumen with technical skills in data analytics and AI to deliver actionable insights.",
  
  experience: [
    {
      company: "Valdonica SRL",
      role: "M&A Analyst",
      period: "2022 - Present",
      description: "Leading financial analysis and due diligence for mergers and acquisitions.",
      highlights: [
        "Conducted comprehensive financial modeling and valuation analysis",
        "Led due diligence processes for multiple transactions",
        "Developed risk assessment frameworks for deal evaluation",
      ],
    },
    {
      company: "Risk Analytics Firm",
      role: "Risk Analyst",
      period: "2020 - 2022",
      description: "Specialized in quantitative risk analysis and portfolio management.",
      highlights: [
        "Built quantitative models for risk assessment",
        "Automated reporting dashboards for portfolio risk metrics",
        "Implemented VaR and stress testing frameworks",
      ],
    },
  ],
  
  projects: [
    {
      title: "DCF Sandbox",
      description: "Interactive discounted cash flow valuation tool with scenario analysis and sensitivity tables.",
      technologies: ["React", "TypeScript", "Recharts", "Financial Modeling"],
      link: "#",
    },
    {
      title: "KPI Dashboard",
      description: "Real-time financial KPI tracking dashboard with automated data pipelines and visualization.",
      technologies: ["Next.js", "Python", "SQL", "Chart.js"],
      link: "#",
    },
    {
      title: "Portfolio Risk Analyzer",
      description: "Advanced portfolio risk analytics tool with VaR, CVaR, and Monte Carlo simulation.",
      technologies: ["Python", "NumPy", "Pandas", "Plotly"],
      link: "#",
    },
    {
      title: "Financial Statement Parser",
      description: "AI-powered tool to extract and analyze financial statements from PDFs.",
      technologies: ["Python", "NLP", "TensorFlow", "FastAPI"],
      link: "#",
    },
  ],
  
  certifications: [
    {
      name: "CFA Level II Candidate",
      issuer: "CFA Institute",
      date: "2023",
    },
    {
      name: "FRM Part I",
      issuer: "GARP",
      date: "2022",
    },
    {
      name: "Financial Modeling & Valuation",
      issuer: "Wall Street Prep",
      date: "2021",
    },
    {
      name: "Python for Finance",
      issuer: "DataCamp",
      date: "2021",
    },
  ],
  
  skills: [
    "Financial Modeling",
    "Valuation (DCF, Comparables)",
    "M&A Analysis",
    "Risk Management",
    "Portfolio Analytics",
    "Python",
    "SQL",
    "Excel/VBA",
    "Power BI",
    "Tableau",
    "React/Next.js",
    "TypeScript",
    "Machine Learning",
    "Statistics",
    "Bloomberg Terminal",
  ],
  
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/soumyakantabera",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/soumyakantabera",
      icon: "github",
    },
    {
      name: "Email",
      url: "mailto:soumyakanta@example.com",
      icon: "mail",
    },
  ],
};
