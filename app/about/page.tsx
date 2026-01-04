"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/config/profile";
import SketchWrapper from "@/components/SketchWrapper";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Bridging finance, risk analytics, and technology
        </p>

        {/* Bio Section */}
        <section className="mb-16">
          <SketchWrapper className="max-w-3xl">
            <p className="text-lg leading-relaxed">
              {profile.bio}
            </p>
          </SketchWrapper>
        </section>

        {/* Skills Snapshot */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            <span className="font-handwritten text-primary">📊</span> Skills Snapshot
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Finance Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Finance & Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.finance.map((skill) => (
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
                <CardTitle className="text-xl">Technical Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Analytics & Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.analytics.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            <span className="font-handwritten text-primary">🎓</span> Education
          </h2>
          
          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground">
                    {edu.school} • {edu.year}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
