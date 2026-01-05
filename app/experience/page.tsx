'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/config/profile"
import { Building2, Calendar, Briefcase } from "lucide-react"
import { useExplainMode } from "@/contexts/ExplainModeContext"
import DoodleArrow from "@/components/DoodleArrow"

export default function ExperiencePage() {
  const { mode } = useExplainMode()

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Deal Room
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'simple' 
              ? 'My journey from numbers to insights'
              : 'A timeline of my professional journey in finance and analytics'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline dot with pulse */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    rotate: index % 2 === 0 ? -1 : 1 
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-base">
                            <Building2 size={16} />
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Highlights:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                            >
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Arrow */}
        <motion.div
          className="flex flex-col items-center mt-16 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <DoodleArrow direction="down" className="text-primary w-16 h-16" />
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            {mode === 'simple' 
              ? 'Every deal taught me something. Every model made me faster. Every challenge made me better.'
              : 'Each experience has shaped my approach to combining financial expertise with technical innovation.'}
          </p>
        </motion.div>

        {/* Annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-blue-600 bg-blue-50 px-6 py-3 rounded-lg transform rotate-1">
            {mode === 'simple' 
              ? 'From spreadsheets to dashboards 📊 → 🚀'
              : 'Building bridges between finance and technology 🚀'}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
