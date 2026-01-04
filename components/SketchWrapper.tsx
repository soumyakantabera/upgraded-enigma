'use client'

import { ReactNode } from "react"

interface SketchWrapperProps {
  children: ReactNode
  className?: string
}

const SketchWrapper = ({ children, className = "" }: SketchWrapperProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ filter: 'drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.1))' }}
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '5, 3',
          }}
        />
      </svg>
      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  )
}

export default SketchWrapper
