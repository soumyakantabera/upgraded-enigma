'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profile } from "@/config/profile"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! (This is a demo form)')
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: profile.socialLinks.find(link => link.name === 'LinkedIn')?.url || '#',
      color: 'text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: profile.socialLinks.find(link => link.name === 'GitHub')?.url || '#',
      color: 'text-gray-800',
    },
    {
      name: 'Email',
      icon: Mail,
      url: profile.socialLinks.find(link => link.name === 'Email')?.url || '#',
      color: 'text-red-600',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Let&apos;s discuss finance, data, or potential collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Find me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <Icon size={24} className={link.color} />
                      <div>
                        <div className="font-semibold">{link.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {link.name === 'LinkedIn' && 'Connect professionally'}
                          {link.name === 'GitHub' && 'Check out my code'}
                          {link.name === 'Email' && 'Send me an email'}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I&apos;m currently open to discussing:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Consulting opportunities</li>
                  <li>Collaborative projects</li>
                  <li>Speaking engagements</li>
                  <li>Technical discussions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-indigo-600 bg-indigo-50 px-6 py-3 rounded-lg transform rotate-1">
            Looking forward to hearing from you! ✉️
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
