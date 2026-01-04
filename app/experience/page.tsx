"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/config/profile";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="font-handwritten text-primary">💼</span> Deal Room
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          My professional journey in M&A, risk analytics, and financial modeling
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <Card className="md:ml-20">
                  <CardHeader>
                    <CardTitle className="text-2xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Key Achievements:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
