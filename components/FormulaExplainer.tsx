'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useExplainMode } from '@/contexts/ExplainModeContext'

interface FormulaTerm {
  term: string
  simpleExplanation: string
  advancedExplanation: string
}

interface FormulaExplainerProps {
  title: string
  formula: string
  terms: FormulaTerm[]
  description?: string
}

export default function FormulaExplainer({ title, formula, terms, description }: FormulaExplainerProps) {
  const { mode } = useExplainMode()
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleTermHover = (term: string, event: React.MouseEvent) => {
    setHoveredTerm(term)
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const getTermExplanation = (term: string): string => {
    const termData = terms.find(t => t.term === term)
    if (!termData) return ''
    return mode === 'simple' ? termData.simpleExplanation : termData.advancedExplanation
  }

  // Highlight terms in the formula
  const renderFormulaWithHighlights = () => {
    let formulaWithHighlights = formula
    terms.forEach(({ term }) => {
      const regex = new RegExp(`\\b${term}\\b`, 'g')
      formulaWithHighlights = formulaWithHighlights.replace(
        regex,
        `<span class="term-highlight" data-term="${term}">${term}</span>`
      )
    })
    return formulaWithHighlights
  }

  return (
    <div className="relative">
      <div className="bg-slate-900 text-green-400 rounded-lg p-6 font-mono text-sm shadow-lg border-2 border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-slate-400 ml-2">{title}</span>
        </div>

        <div className="space-y-2">
          <div className="text-blue-400">
            <span className="text-slate-500">$</span> explain
          </div>
          
          <div className="relative">
            <pre className="text-green-400 whitespace-pre-wrap break-words">
              {formula.split(/\b/).map((part, index) => {
                const termData = terms.find(t => t.term === part)
                if (termData) {
                  return (
                    <motion.span
                      key={index}
                      className={`cursor-help transition-colors ${
                        hoveredTerm === part ? 'text-yellow-400 font-bold' : ''
                      }`}
                      onMouseEnter={(e) => handleTermHover(part, e)}
                      onMouseLeave={() => setHoveredTerm(null)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {part}
                    </motion.span>
                  )
                }
                return <span key={index}>{part}</span>
              })}
            </pre>
          </div>

          {description && (
            <div className="text-slate-400 text-xs mt-3 pt-3 border-t border-slate-700">
              {description}
            </div>
          )}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredTerm && (
          <motion.div
            className="fixed z-50 max-w-xs bg-background border-2 border-primary rounded-lg shadow-xl p-4"
            style={{
              left: tooltipPosition.x + 20,
              top: tooltipPosition.y - 60,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-mono text-sm font-bold text-primary mb-2">{hoveredTerm}</div>
            <p className="text-sm text-foreground">{getTermExplanation(hoveredTerm)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
