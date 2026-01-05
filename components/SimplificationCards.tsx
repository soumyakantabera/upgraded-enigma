'use client'

import { motion } from 'framer-motion'
import { Clock, Image as ImageIcon, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const simplificationCards = [
  {
    icon: Clock,
    title: 'DCF in 60s',
    complex: 'Discounted Cash Flow analysis with multiple scenarios, WACC calculations, and terminal value computations',
    simple: 'Future money is worth less today. We calculate how much less, add it up, and boom - company value!',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ImageIcon,
    title: 'Risk in 1 Picture',
    complex: 'Monte Carlo simulations, VaR calculations, stress testing, and correlation matrices for portfolio optimization',
    simple: 'Show how bad things could get with a chart. The bigger the spread, the riskier. That\'s it.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Forecasting Without Fear',
    complex: 'Time series analysis, regression models, confidence intervals, and scenario planning with probabilistic outcomes',
    simple: 'Look at patterns from the past, draw the line forward, add wiggle room. Done.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
]

export default function SimplificationCards() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Complex → Simple
        </h2>
        <p className="text-lg text-muted-foreground">
          Here's how I break down the hard stuff
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {simplificationCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center mb-3`}>
                      <Icon className={card.color} size={24} />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase">
                        Before (Complex)
                      </div>
                      <p className="text-sm text-muted-foreground line-through opacity-60">
                        {card.complex}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary mb-1 uppercase">
                        After (Simple)
                      </div>
                      <p className="text-sm font-medium">
                        {card.simple}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
