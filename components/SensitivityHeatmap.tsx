'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useExplainMode } from '@/contexts/ExplainModeContext'

interface SensitivityHeatmapProps {
  baseValue: number
  waccRange: number[]
  growthRange: number[]
}

export default function SensitivityHeatmap({ baseValue, waccRange, growthRange }: SensitivityHeatmapProps) {
  const { mode } = useExplainMode()
  const [hoveredCell, setHoveredCell] = useState<{ wacc: number; growth: number } | null>(null)

  const calculateValue = (wacc: number, growth: number): number => {
    if (wacc <= growth) return 0
    return (baseValue * (1 + growth / 100)) / (wacc / 100 - growth / 100)
  }

  const getColor = (value: number, minValue: number, maxValue: number): string => {
    const normalized = (value - minValue) / (maxValue - minValue)
    if (normalized > 0.7) return 'bg-green-500'
    if (normalized > 0.5) return 'bg-green-400'
    if (normalized > 0.3) return 'bg-yellow-400'
    if (normalized > 0.15) return 'bg-orange-400'
    return 'bg-red-400'
  }

  // Calculate all values for normalization
  const allValues = waccRange.flatMap(wacc =>
    growthRange.map(growth => calculateValue(wacc, growth))
  ).filter(v => v > 0)
  
  const minValue = Math.min(...allValues)
  const maxValue = Math.max(...allValues)

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">
        {mode === 'simple' 
          ? 'How Changes Affect Value 🎯' 
          : 'Sensitivity Analysis: WACC vs Growth Rate'}
      </h3>
      
      {mode === 'simple' && (
        <p className="text-sm text-muted-foreground mb-4">
          Green = good, Red = not so good. Hover to see exact numbers.
        </p>
      )}

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Table header */}
          <div className="flex items-center mb-2">
            <div className="w-24 text-xs font-semibold">WACC →</div>
            {waccRange.map(wacc => (
              <div key={wacc} className="w-20 text-center text-xs font-semibold">
                {wacc}%
              </div>
            ))}
          </div>

          {/* Table rows */}
          {growthRange.map((growth, rowIndex) => (
            <div key={growth} className="flex items-center mb-1">
              <div className="w-24 text-xs font-semibold">Growth {growth}%</div>
              {waccRange.map((wacc, colIndex) => {
                const value = calculateValue(wacc, growth)
                const isValid = value > 0
                return (
                  <motion.div
                    key={`${wacc}-${growth}`}
                    className={`w-20 h-16 flex items-center justify-center text-xs font-mono cursor-pointer border border-gray-200 ${
                      isValid ? getColor(value, minValue, maxValue) : 'bg-gray-200'
                    } ${isValid ? 'text-white' : 'text-gray-500'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (rowIndex * waccRange.length + colIndex) * 0.02 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    onHoverStart={() => setHoveredCell({ wacc, growth })}
                    onHoverEnd={() => setHoveredCell(null)}
                  >
                    {isValid ? (
                      <span>${(value / 1000000).toFixed(1)}M</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredCell && (
        <motion.div
          className="mt-4 p-4 bg-muted rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-semibold mb-1">
            WACC: {hoveredCell.wacc}% | Growth: {hoveredCell.growth}%
          </p>
          <p className="text-sm text-muted-foreground">
            {mode === 'simple' 
              ? `Value: $${(calculateValue(hoveredCell.wacc, hoveredCell.growth) / 1000000).toFixed(2)}M. ${
                  hoveredCell.wacc > hoveredCell.growth + 5 
                    ? 'Safe zone! Big gap between cost and growth.'
                    : hoveredCell.wacc <= hoveredCell.growth
                    ? 'Danger! Growth can\'t be higher than cost of capital.'
                    : 'Close call. Small changes have big impacts.'
                }`
              : `Enterprise Value: $${(calculateValue(hoveredCell.wacc, hoveredCell.growth) / 1000000).toFixed(2)}M. ${
                  hoveredCell.wacc <= hoveredCell.growth
                    ? 'Invalid: WACC must exceed growth rate for stable valuation.'
                    : 'Sensitivity increases as WACC approaches terminal growth rate.'
                }`}
          </p>
        </motion.div>
      )}
    </div>
  )
}
