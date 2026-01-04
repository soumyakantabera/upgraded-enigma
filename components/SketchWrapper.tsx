"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SketchWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SketchWrapper({ children, className }: SketchWrapperProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{ filter: "url(#roughen)" }}
      >
        <defs>
          <filter id="roughen">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,3"
          className="text-primary/40"
        />
      </svg>
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
