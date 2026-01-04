'use client'

import { ReactNode } from "react"

interface TerminalBlockProps {
  title: string
  formula: string
  description?: string
}

const TerminalBlock = ({ title, formula, description }: TerminalBlockProps) => {
  return (
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
          <span className="text-slate-500">$</span> calculate
        </div>
        <pre className="text-green-400 whitespace-pre-wrap break-words">{formula}</pre>
        {description && (
          <div className="text-slate-400 text-xs mt-3 pt-3 border-t border-slate-700">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

export default TerminalBlock
