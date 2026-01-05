'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type ExplainMode = 'simple' | 'advanced'

interface ExplainModeContextType {
  mode: ExplainMode
  setMode: (mode: ExplainMode) => void
  toggleMode: () => void
}

const ExplainModeContext = createContext<ExplainModeContextType | undefined>(undefined)

export function ExplainModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ExplainMode>('simple')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('explainMode') as ExplainMode
    if (stored === 'simple' || stored === 'advanced') {
      setModeState(stored)
    }
  }, [])

  const setMode = (newMode: ExplainMode) => {
    setModeState(newMode)
    if (mounted) {
      localStorage.setItem('explainMode', newMode)
    }
  }

  const toggleMode = () => {
    setMode(mode === 'simple' ? 'advanced' : 'simple')
  }

  return (
    <ExplainModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ExplainModeContext.Provider>
  )
}

export function useExplainMode() {
  const context = useContext(ExplainModeContext)
  if (context === undefined) {
    throw new Error('useExplainMode must be used within ExplainModeProvider')
  }
  return context
}
