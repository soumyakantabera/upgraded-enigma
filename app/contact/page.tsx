"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";
import SketchWrapper from "@/components/SketchWrapper";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler - to be implemented with backend integration
    console.log("Form submission would be handled here");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="font-handwritten text-primary">📬</span> Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Let&apos;s discuss opportunities, collaborations, or just connect
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <SketchWrapper>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Direct Contact</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${profile.social.email}`} className="hover:text-primary">
                    {profile.social.email}
                  </a>
                </div>
              </div>
            </SketchWrapper>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional network</div>
                  </div>
                </a>

                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">Code repositories</div>
                  </div>
                </a>

                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-muted-foreground">Thoughts and updates</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What I&apos;m Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• M&A and corporate finance opportunities</li>
                  <li>• Fintech product development collaborations</li>
                  <li>• Quantitative analysis projects</li>
                  <li>• Speaking engagements and workshops</li>
                  <li>• Open source contributions in finance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
