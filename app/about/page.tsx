'use client'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/config/profile"
import SketchWrapper from "@/components/SketchWrapper"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        {/* Personal Story */}
        <SketchWrapper className="mb-12">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {profile.bio}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a Master&apos;s degree in Finance & Risk Management and hands-on experience in M&A, 
            I bridge the gap between traditional finance and modern technology. My work focuses on 
            creating data-driven solutions that transform complex financial data into actionable insights.
          </p>
        </SketchWrapper>

        {/* Skills Snapshot */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">Skills Snapshot</h2>
            <div className="font-handwritten text-xl text-blue-600 transform rotate-2">
              ✓ verified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Financial Skills */}
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

            {/* Technical Skills */}
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

            {/* Tools & Platforms */}
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
          </div>
        </div>
      </motion.div>
    </div>
  )
}
