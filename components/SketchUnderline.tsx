'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SketchUnderlineProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function SketchUnderline({ children, className = '', delay = 0 }: SketchUnderlineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <motion.svg
        className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
      >
        <motion.path
          d="M 0 3 Q 25 1, 50 3 T 100 3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    </span>
  )
}
