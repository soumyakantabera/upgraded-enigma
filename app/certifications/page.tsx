'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/config/profile"
import { Award, Calendar, BookOpen } from "lucide-react"
import { useState } from "react"
import { useExplainMode } from "@/contexts/ExplainModeContext"

// Additional information for certifications
const certDetails: Record<string, { skills: string[]; impact: string }> = {
  'CFA Level II Candidate': {
    skills: ['Asset Valuation', 'Equity Analysis', 'Fixed Income', 'Derivatives'],
    impact: 'Deep dive into security analysis and portfolio management fundamentals',
  },
  'FRM Part I': {
    skills: ['Market Risk', 'Credit Risk', 'VaR Models', 'Risk Metrics'],
    impact: 'Quantitative risk assessment and regulatory frameworks expertise',
  },
  'Financial Modeling & Valuation': {
    skills: ['DCF Models', 'LBO Analysis', 'M&A Valuation', 'Excel Mastery'],
    impact: 'Industry-standard modeling techniques for deal analysis',
  },
  'Python for Finance': {
    skills: ['NumPy', 'Pandas', 'Financial APIs', 'Data Visualization'],
    impact: 'Automated analysis and algorithmic trading foundations',
  },
}

export default function CertificationsPage() {
  const { mode } = useExplainMode()
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Award className="text-yellow-500" />
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'simple' 
              ? 'Proof I actually know this stuff 🎓'
              : 'Professional credentials and continuous learning'}
          </p>
        </div>

        {/* Learning Arc Timeline */}
        <motion.div
          className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen size={24} />
            Learning Arc
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-lg">
            <span className="font-semibold">Foundations</span>
            <motion.span
              className="text-primary"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            <span className="font-semibold">Analytics</span>
            <motion.span
              className="text-primary"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              →
            </motion.span>
            <span className="font-semibold">AI & Tech</span>
            <motion.span
              className="text-primary"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              →
            </motion.span>
            <span className="font-semibold text-primary">Finance Apps</span>
          </div>
        </motion.div>

        {/* Certifications Grid with Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {profile.certifications.map((cert, index) => {
            const isFlipped = flippedCards.has(index)
            const details = certDetails[cert.name]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-64 cursor-pointer"
                  onClick={() => toggleFlip(index)}
                  whileHover={{ scale: 1.02 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <Card
                    className="absolute inset-0 h-full hover:shadow-xl transition-shadow"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <CardTitle className="text-xl mb-2 flex items-center gap-2">
                            <Award className="text-primary" size={24} />
                            {cert.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-center mt-8">
                        {mode === 'simple' ? 'Tap to see what this adds' : 'Click to see more details'}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  {details && (
                    <Card
                      className="absolute inset-0 h-full bg-gradient-to-br from-primary/5 to-primary/10"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">What This Adds</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                          <div className="flex flex-wrap gap-1">
                            {details.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Impact:</h4>
                          <p className="text-sm text-muted-foreground">
                            {details.impact}
                          </p>
                        </div>
                        <div className="text-xs text-center text-muted-foreground mt-4">
                          {mode === 'simple' ? 'Tap again to go back' : 'Click to flip back'}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="p-6 bg-muted rounded-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
          <p className="text-muted-foreground">
            {mode === 'simple' 
              ? 'Finance changes fast. I keep learning so I can keep building cool stuff that actually works.'
              : 'I\'m committed to staying current with industry developments and continuously expanding my knowledge in finance, risk management, and technology. Currently pursuing additional certifications in quantitative finance and machine learning applications in financial markets.'}
          </p>
        </motion.div>

        {/* Annotation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-orange-600 bg-orange-50 px-6 py-3 rounded-lg transform -rotate-1">
            {mode === 'simple' 
              ? 'Never stop learning 🚀'
              : 'Always learning, always growing 📚'}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
