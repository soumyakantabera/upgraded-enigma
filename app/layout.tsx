'use client'

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { ExplainModeProvider } from '@/contexts/ExplainModeContext'
import { MotionConfig, LayoutGroup } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { useEffect, useState } from 'react'

// Note: metadata export removed because this is now a client component
// SEO handled by next/head or metadata API in parent server component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Soumyakanta Bera - Finance & Risk + Analytics + AI</title>
        <meta name="description" content="MSc Finance & Risk Management • M&A experience • Quant + dashboards" />
      </head>
      <body className="font-sans antialiased">
        <ExplainModeProvider>
          <MotionConfig
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }
            }
          >
            <LayoutGroup>
              <Navbar />
              <main className="min-h-screen">
                <PageTransition>{children}</PageTransition>
              </main>
            </LayoutGroup>
          </MotionConfig>
        </ExplainModeProvider>
      </body>
    </html>
  )
}
