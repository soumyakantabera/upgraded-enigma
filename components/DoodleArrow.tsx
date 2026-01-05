'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface DoodleArrowProps {
  direction?: 'right' | 'left' | 'down' | 'up'
  className?: string
  delay?: number
}

export default function DoodleArrow({ direction = 'right', className = '', delay = 0 }: DoodleArrowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const paths = {
    right: 'M 10 25 Q 30 20, 50 25 T 90 25 M 75 15 L 90 25 L 75 35',
    left: 'M 90 25 Q 70 20, 50 25 T 10 25 M 25 15 L 10 25 L 25 35',
    down: 'M 25 10 Q 20 30, 25 50 T 25 90 M 15 75 L 25 90 L 35 75',
    up: 'M 25 90 Q 20 70, 25 50 T 25 10 M 15 25 L 25 10 L 35 25',
  }

  return (
    <svg
      ref={ref}
      className={`inline-block ${className}`}
      width="100"
      height="50"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}
