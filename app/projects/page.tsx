'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/config/profile"
import { ExternalLink, FolderOpen } from "lucide-react"
import { useState } from "react"
import { useExplainMode } from "@/contexts/ExplainModeContext"

// Project categories
const categories = ['All', 'Valuation', 'Risk', 'Dashboards', 'Analytics/AI', 'Tools']

const projectCategories: Record<string, string[]> = {
  'DCF Sandbox': ['Valuation', 'Tools'],
  'KPI Dashboard': ['Dashboards', 'Analytics/AI'],
  'Portfolio Risk Analyzer': ['Risk', 'Analytics/AI'],
  'Financial Statement Parser': ['Analytics/AI', 'Tools'],
}

export default function ProjectsPage() {
  const { mode } = useExplainMode()
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filteredProjects = profile.projects.filter(project => {
    if (activeFilter === 'All') return true
    return projectCategories[project.title]?.includes(activeFilter)
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'simple' 
              ? 'Things I built to make finance less scary'
              : 'A collection of finance and analytics projects I\'ve built'}
          </p>
        </div>

        {/* Filter chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setExpandedProject(project.title)}
                  onHoverEnd={() => setExpandedProject(null)}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
                    {/* Folder tab effect */}
                    <motion.div
                      className="absolute top-0 left-4 w-24 h-8 bg-primary/10 rounded-b-lg"
                      initial={{ height: 8 }}
                      animate={{ height: expandedProject === project.title ? 32 : 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center h-full"
                        >
                          <FolderOpen size={16} className="text-primary" />
                        </motion.div>
                      )}
                    </motion.div>

                    <CardHeader className="pt-6">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>
                        {mode === 'simple' && project.title === 'DCF Sandbox' 
                          ? 'Play with company valuations like a pro'
                          : mode === 'simple' && project.title === 'KPI Dashboard'
                          ? 'See all your numbers in one pretty place'
                          : mode === 'simple' && project.title === 'Portfolio Risk Analyzer'
                          ? 'Check how risky your investments are'
                          : mode === 'simple' && project.title === 'Financial Statement Parser'
                          ? 'AI reads boring PDFs so you don\'t have to'
                          : project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Categories
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {projectCategories[project.title]?.map((cat) => (
                            <Badge key={cat} variant="outline" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    {project.link && (
                      <CardFooter>
                        <motion.div
                          className="w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button variant="outline" className="w-full gap-2" asChild>
                            <a href={project.link}>
                              View Project
                              <ExternalLink size={16} />
                            </a>
                          </Button>
                        </motion.div>
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Hand-drawn arrow annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-purple-600 bg-purple-50 px-6 py-3 rounded-lg transform -rotate-1">
            More projects coming soon! 📊
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
