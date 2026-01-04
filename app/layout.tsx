import type { Metadata } from "next";
import { Inter, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const patrickHand = Patrick_Hand({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
  title: "Soumyakanta Bera | Finance & Risk + Analytics + AI",
  description: "Portfolio of Soumyakanta Bera - MSc Finance & Risk Management, M&A experience, Quant + dashboards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${patrickHand.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
