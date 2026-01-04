"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalBlockProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalBlock({ title, children, className }: TerminalBlockProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden", className)}>
      <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
        </div>
        {title && (
          <span className="text-xs font-mono text-muted-foreground ml-2">{title}</span>
        )}
      </div>
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
