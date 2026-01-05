'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { useExplainMode } from '@/contexts/ExplainModeContext'

interface ComplexPoint {
  real: number
  imaginary: number
}

export default function ComplexPlaneHero() {
  const { mode } = useExplainMode()
  const [draggedPoint, setDraggedPoint] = useState<ComplexPoint>({ real: 5, imaginary: 3 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 600, height: 400 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setContainerSize({ width, height })
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Convert pixel coordinates to complex plane coordinates
  const pixelToComplex = (px: number, py: number): ComplexPoint => {
    const real = ((px - containerSize.width / 2) / (containerSize.width / 2)) * 10
    const imaginary = (-(py - containerSize.height / 2) / (containerSize.height / 2)) * 10
    return { real, imaginary }
  }

  // Convert complex plane coordinates to pixel coordinates
  const complexToPixel = (point: ComplexPoint): { x: number; y: number } => {
    const px = (point.real / 10) * (containerSize.width / 2) + containerSize.width / 2
    const py = -(point.imaginary / 10) * (containerSize.height / 2) + containerSize.height / 2
    return { x: px, y: py }
  }

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const point = pixelToComplex(info.point.x, info.point.y)
    setDraggedPoint(point)
  }

  const getInterpretation = (point: ComplexPoint): string => {
    const { real, imaginary } = point
    
    if (mode === 'simple') {
      if (real > 5 && Math.abs(imaginary) < 3) {
        return 'Strong value, stable 📈'
      } else if (real < 2 && imaginary > 5) {
        return 'Speculative, high risk ⚠️'
      } else if (Math.abs(real) < 3 && Math.abs(imaginary) < 3) {
        return 'Balanced position ⚖️'
      } else {
        return 'Exploring the space 🔍'
      }
    } else {
      return `z = ${real.toFixed(2)} + ${imaginary.toFixed(2)}i\n|z| = ${Math.sqrt(real * real + imaginary * imaginary).toFixed(2)}\narg(z) = ${(Math.atan2(imaginary, real) * 180 / Math.PI).toFixed(2)}°`
    }
  }

  const currentPixelPos = complexToPixel(draggedPoint)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          The Complex Plane
        </h2>
        <p className="text-lg text-muted-foreground">
          {mode === 'simple' 
            ? 'Drag the point. See the story. 👇' 
            : 'Interactive visualization of complex numbers in finance'}
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[400px] md:h-[500px] bg-background border-2 border-dashed border-primary/30 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        {/* Axes */}
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
          {/* Real axis (horizontal) */}
          <line
            x1="0"
            y1={containerSize.height / 2}
            x2={containerSize.width}
            y2={containerSize.height / 2}
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />
          {/* Imaginary axis (vertical) */}
          <line
            x1={containerSize.width / 2}
            y1="0"
            x2={containerSize.width / 2}
            y2={containerSize.height}
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Axis labels */}
          <text x={containerSize.width - 60} y={containerSize.height / 2 - 10} className="text-sm fill-current">
            Value (Re)
          </text>
          <text x={containerSize.width / 2 + 10} y="20" className="text-sm fill-current">
            Risk (Im)
          </text>
        </svg>

        {/* Draggable point */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragMomentum={false}
          onDrag={handleDrag}
          style={{
            x: currentPixelPos.x - 16,
            y: currentPixelPos.y - 16,
          }}
          className="absolute w-8 h-8 bg-primary rounded-full cursor-move shadow-lg z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
        </motion.div>

        {/* Connection line from origin */}
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
          <motion.line
            x1={containerSize.width / 2}
            y1={containerSize.height / 2}
            x2={currentPixelPos.x}
            y2={currentPixelPos.y}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        </svg>
      </div>

      {/* Interpretation panel */}
      <motion.div
        className="mt-6 p-6 bg-muted rounded-lg"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-2">
          {mode === 'simple' ? 'What does this mean?' : 'Mathematical Representation'}
        </h3>
        <p className="text-muted-foreground whitespace-pre-line">
          {getInterpretation(draggedPoint)}
        </p>
      </motion.div>
    </div>
  )
}
