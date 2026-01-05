'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profile } from "@/config/profile"
import { Mail, Linkedin, Github, Send, Check } from "lucide-react"
import { useState } from "react"
import { useExplainMode } from "@/contexts/ExplainModeContext"

export default function ContactPage() {
  const { mode } = useExplainMode()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: profile.socialLinks.find(link => link.name === 'LinkedIn')?.url || '#',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: profile.socialLinks.find(link => link.name === 'GitHub')?.url || '#',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
    },
    {
      name: 'Email',
      icon: Mail,
      url: profile.socialLinks.find(link => link.name === 'Email')?.url || '#',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
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
            {mode === 'simple' 
              ? 'Let\'s chat about making finance less confusing 💬'
              : 'Let\'s discuss finance, data, or potential collaborations'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="relative overflow-hidden">
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-green-500 z-50 flex flex-col items-center justify-center text-white"
                  initial={{ scale: 0, borderRadius: '100%' }}
                  animate={{ scale: 1, borderRadius: '0%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <Check size={64} className="mb-4" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Message Sent! ✨
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {mode === 'simple' 
                      ? 'I\'ll get back to you soon!'
                      : 'Thank you for reaching out. I\'ll respond shortly.'}
                  </motion.p>
                  
                  {/* Paper plane animation */}
                  <motion.div
                    className="absolute"
                    initial={{ x: '-50%', y: '-50%', rotate: 0, scale: 0 }}
                    animate={{ 
                      x: ['50%', '150%'], 
                      y: ['-50%', '-150%'],
                      rotate: 45,
                      scale: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  >
                    <Send size={32} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                {mode === 'simple' 
                  ? 'Drop me a line and I\'ll get back to you'
                  : 'Fill out the form below and I\'ll get back to you soon'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full gap-2 relative overflow-hidden" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send size={16} />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  {mode === 'simple' 
                    ? 'Find me on these platforms'
                    : 'Let\'s connect on social media'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-all`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 4, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    >
                      <div className={`w-12 h-12 rounded-full ${link.bgColor} flex items-center justify-center`}>
                        <Icon size={24} className={link.color} />
                      </div>
                      <div>
                        <div className="font-semibold">{link.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {link.name === 'LinkedIn' && (mode === 'simple' ? 'Professional stuff' : 'Connect professionally')}
                          {link.name === 'GitHub' && (mode === 'simple' ? 'My code lives here' : 'Check out my code')}
                          {link.name === 'Email' && (mode === 'simple' ? 'Old school contact' : 'Send me an email')}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {mode === 'simple' 
                    ? 'I\'m open to chatting about:'
                    : 'I\'m currently open to discussing:'}
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>{mode === 'simple' ? 'Cool projects' : 'Consulting opportunities'}</li>
                  <li>{mode === 'simple' ? 'Team-ups' : 'Collaborative projects'}</li>
                  <li>{mode === 'simple' ? 'Talks & workshops' : 'Speaking engagements'}</li>
                  <li>{mode === 'simple' ? 'Nerdy finance chats' : 'Technical discussions'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-indigo-600 bg-indigo-50 px-6 py-3 rounded-lg transform rotate-1">
            {mode === 'simple' 
              ? 'Seriously, reach out! I love talking about this stuff ✉️'
              : 'Looking forward to hearing from you! ✉️'}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
