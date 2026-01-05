'use client'

import { motion } from 'framer-motion'
import { useExplainMode } from '@/contexts/ExplainModeContext'
import { GraduationCap, Sparkles } from 'lucide-react'

export default function ExplainModeToggle() {
  const { mode, toggleMode } = useExplainMode()

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/20 bg-background hover:border-primary/40 transition-colors"
      aria-label={`Switch to ${mode === 'simple' ? 'advanced' : 'simple'} mode`}
    >
      <span className="text-sm font-medium hidden sm:inline">Explain Mode:</span>
      
      <div className="relative flex items-center gap-1">
        <motion.div
          className="absolute inset-0 bg-primary rounded-full"
          initial={false}
          animate={{
            x: mode === 'simple' ? 0 : '100%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: '50%' }}
        />
        
        <div className="relative z-10 flex items-center gap-1">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              mode === 'simple' ? 'text-primary-foreground' : 'text-foreground'
            }`}
          >
            <Sparkles size={14} className="inline mr-1" />
            Simple
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              mode === 'advanced' ? 'text-primary-foreground' : 'text-foreground'
            }`}
          >
            <GraduationCap size={14} className="inline mr-1" />
            Advanced
          </span>
        </div>
      </div>
    </button>
  )
}
