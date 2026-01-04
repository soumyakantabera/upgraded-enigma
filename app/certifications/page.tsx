"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="font-handwritten text-primary">🏆</span> Certifications
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Professional certifications and continuous learning journey
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{cert.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      <Badge variant="outline" className="mt-2">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="gap-2" asChild>
                    <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Continuous Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I&apos;m committed to staying current with the latest developments in finance, risk management, and technology. Currently working towards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>CFA Level III (scheduled for 2025)</li>
                <li>FRM Part II preparation</li>
                <li>Advanced machine learning specializations</li>
                <li>Cloud certifications (AWS/Azure)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
