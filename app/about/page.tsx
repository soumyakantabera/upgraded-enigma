'use client'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/config/profile"
import SketchWrapper from "@/components/SketchWrapper"
import SimplificationCards from "@/components/SimplificationCards"
import SketchUnderline from "@/components/SketchUnderline"
import AnimatedChart from "@/components/AnimatedChart"
import { useExplainMode } from "@/contexts/ExplainModeContext"

export default function AboutPage() {
  const { mode } = useExplainMode()

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          About Me
        </h1>

        {/* Hero statement */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            I explain <SketchUnderline className="text-primary">hard things</SketchUnderline> simply
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {mode === 'simple' 
              ? "Finance is confusing. It doesn't have to be. I turn scary formulas into friendly walkthroughs."
              : "Bridging the gap between complex quantitative concepts and accessible understanding through intuitive visualization and clear communication."}
          </p>
        </motion.div>

        {/* Simplification Cards */}
        <SimplificationCards />

        {/* Personal Story */}
        <SketchWrapper className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {profile.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a Master&apos;s degree in Finance & Risk Management and hands-on experience in M&A, 
              I bridge the gap between traditional finance and modern technology. My work focuses on 
              creating data-driven solutions that transform complex financial data into actionable insights.
            </p>
          </motion.div>
        </SketchWrapper>

        {/* Skills Snapshot */}
        <AnimatedChart className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">Skills Snapshot</h2>
            <motion.div
              className="font-handwritten text-xl text-blue-600 transform rotate-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              ✓ verified
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Financial Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  rotate: 1 
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Financial Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills
                        .filter(skill => 
                          ['Financial Modeling', 'Valuation (DCF, Comparables)', 'M&A Analysis', 
                           'Risk Management', 'Portfolio Analytics', 'Bloomberg Terminal'].includes(skill)
                        )
                        .map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  rotate: -1 
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills
                        .filter(skill => 
                          ['Python', 'SQL', 'Excel/VBA', 'React/Next.js', 
                           'TypeScript', 'Machine Learning', 'Statistics'].includes(skill)
                        )
                        .map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  rotate: 1 
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Tools & Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills
                        .filter(skill => 
                          ['Power BI', 'Tableau', 'Excel/VBA', 'Bloomberg Terminal'].includes(skill)
                        )
                        .map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedChart>
      </motion.div>
    </div>
  )
}
