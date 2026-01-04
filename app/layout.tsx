import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Patrick_Hand } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const patrickHand = Patrick_Hand({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-patrick-hand',
})

export const metadata: Metadata = {
  title: 'Soumyakanta Bera - Finance & Risk + Analytics + AI',
  description: 'MSc Finance & Risk Management • M&A experience • Quant + dashboards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${patrickHand.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
