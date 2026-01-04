'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/config/profile"
import { Award, Calendar } from "lucide-react"

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground">
            Professional credentials and continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 p-6 bg-muted rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
          <p className="text-muted-foreground">
            I&apos;m committed to staying current with industry developments and continuously 
            expanding my knowledge in finance, risk management, and technology. Currently pursuing 
            additional certifications in quantitative finance and machine learning applications 
            in financial markets.
          </p>
        </motion.div>

        {/* Annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-orange-600 bg-orange-50 px-6 py-3 rounded-lg transform -rotate-1">
            Always learning, always growing 📚
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
