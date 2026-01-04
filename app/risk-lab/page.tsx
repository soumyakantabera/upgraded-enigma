'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TerminalBlock from "@/components/TerminalBlock"
import { Calculator, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function RiskLabPage() {
  const [dcfInputs, setDcfInputs] = useState({
    fcf: '',
    growthRate: '',
    wacc: '',
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Risk Lab</h1>
          <p className="text-xl text-muted-foreground">
            Interactive financial models and risk analysis tools
          </p>
        </div>

        {/* Finance Formulas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <TerminalBlock
            title="WACC Formula"
            formula={`WACC = (E/V × Re) + (D/V × Rd × (1-Tc))

Where:
E = Market value of equity
D = Market value of debt
V = E + D (Total value)
Re = Cost of equity
Rd = Cost of debt
Tc = Corporate tax rate`}
            description="Weighted Average Cost of Capital - the average rate a company expects to pay to finance its assets"
          />

          <TerminalBlock
            title="NPV Formula"
            formula={`NPV = Σ[CFt / (1 + r)^t] - Initial Investment

Where:
CFt = Cash flow at time t
r = Discount rate
t = Time period`}
            description="Net Present Value - the difference between present value of cash inflows and outflows"
          />
        </div>

        {/* Interactive Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DCF Quick Valuation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator size={24} />
                DCF Quick Valuation
              </CardTitle>
              <CardDescription>
                Simplified discounted cash flow calculator
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fcf">Free Cash Flow ($)</Label>
                <Input
                  id="fcf"
                  type="number"
                  placeholder="e.g., 1000000"
                  value={dcfInputs.fcf}
                  onChange={(e) => setDcfInputs({ ...dcfInputs, fcf: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="growthRate">Growth Rate (%)</Label>
                <Input
                  id="growthRate"
                  type="number"
                  placeholder="e.g., 5"
                  value={dcfInputs.growthRate}
                  onChange={(e) => setDcfInputs({ ...dcfInputs, growthRate: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="wacc">WACC (%)</Label>
                <Input
                  id="wacc"
                  type="number"
                  placeholder="e.g., 10"
                  value={dcfInputs.wacc}
                  onChange={(e) => setDcfInputs({ ...dcfInputs, wacc: e.target.value })}
                />
              </div>
              <Button className="w-full">Calculate Valuation</Button>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Enterprise Value</div>
                <div className="text-2xl font-bold">
                  {dcfInputs.fcf && dcfInputs.growthRate && dcfInputs.wacc
                    ? `$${(
                        (parseFloat(dcfInputs.fcf) * (1 + parseFloat(dcfInputs.growthRate) / 100)) /
                        (parseFloat(dcfInputs.wacc) / 100 - parseFloat(dcfInputs.growthRate) / 100)
                      ).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
                    : '$--'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forecast Playground */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={24} />
                Forecast Playground
              </CardTitle>
              <CardDescription>
                Interactive financial forecasting tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center text-muted-foreground">
                  <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Chart visualization coming soon</p>
                  <p className="text-sm mt-2">Monte Carlo simulations, scenario analysis</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">Run Scenario Analysis</Button>
                <Button variant="outline" className="w-full">Monte Carlo Simulation</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Annotation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-green-600 bg-green-50 px-6 py-3 rounded-lg transform rotate-1">
            Interactive tools for financial modeling 🎯
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
