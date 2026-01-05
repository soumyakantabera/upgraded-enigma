'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SketchHighlightProps {
  children: React.ReactNode
  className?: string
  color?: string
  delay?: number
}

export default function SketchHighlight({ 
  children, 
  className = '', 
  color = 'rgb(254, 240, 138)', 
  delay = 0 
}: SketchHighlightProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute inset-0 -z-10 rotate-[-1deg]"
        style={{ backgroundColor: color, transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      />
      {children}
    </span>
  )
}
