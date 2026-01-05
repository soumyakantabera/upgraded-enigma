'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FormulaExplainer from "@/components/FormulaExplainer"
import SensitivityHeatmap from "@/components/SensitivityHeatmap"
import AnimatedChart from "@/components/AnimatedChart"
import { Calculator, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"
import { useExplainMode } from "@/contexts/ExplainModeContext"

export default function RiskLabPage() {
  const { mode } = useExplainMode()
  const [dcfInputs, setDcfInputs] = useState({
    fcf: '1000000',
    growthRate: '5',
    wacc: '10',
  })

  const calculateDCFValue = () => {
    const wacc = parseFloat(dcfInputs.wacc) / 100
    const growth = parseFloat(dcfInputs.growthRate) / 100
    const fcf = parseFloat(dcfInputs.fcf)
    
    if (wacc <= growth || !fcf || !wacc || !growth) return null
    return (fcf * (1 + growth)) / (wacc - growth)
  }

  const dcfValue = calculateDCFValue()

  const waccTerms = [
    { term: 'E', simpleExplanation: 'How much the company is worth in the stock market', advancedExplanation: 'Market value of equity - total value of all outstanding shares' },
    { term: 'D', simpleExplanation: 'How much money the company owes', advancedExplanation: 'Market value of debt - total outstanding debt obligations' },
    { term: 'V', simpleExplanation: 'Total value = stocks + debt', advancedExplanation: 'Total firm value (E + D) - used for weighting' },
    { term: 'Re', simpleExplanation: 'What investors expect to earn from stocks', advancedExplanation: 'Cost of equity - return required by equity investors (often CAPM)' },
    { term: 'Rd', simpleExplanation: 'Interest rate on company\'s debt', advancedExplanation: 'Cost of debt - weighted average interest rate on outstanding debt' },
    { term: 'Tc', simpleExplanation: 'Tax rate (debt saves taxes!)', advancedExplanation: 'Corporate tax rate - creates tax shield on debt interest' },
  ]

  const npvTerms = [
    { term: 'CFt', simpleExplanation: 'Money coming in each year', advancedExplanation: 'Cash flow at time period t' },
    { term: 'r', simpleExplanation: 'Your hurdle rate (what return you need)', advancedExplanation: 'Discount rate - required rate of return reflecting risk' },
    { term: 't', simpleExplanation: 'Year number (1, 2, 3...)', advancedExplanation: 'Time period in years from present' },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-yellow-500" />
            Risk Lab
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'simple' 
              ? 'Play with real financial models. No scary math, just results.'
              : 'Interactive financial models and risk analysis tools'}
          </p>
        </div>

        {/* Interactive Finance Formulas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {mode === 'simple' ? 'The Building Blocks 🧱' : 'Core Financial Formulas'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {mode === 'simple' 
              ? 'Hover over the colored terms to see what they mean in plain English'
              : 'Interactive formula explanations - hover over terms for detailed definitions'}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatedChart delay={0.1}>
              <FormulaExplainer
                title="WACC Formula"
                formula={`WACC = (E/V × Re) + (D/V × Rd × (1-Tc))

Where:
E = Market value of equity
D = Market value of debt
V = E + D (Total value)
Re = Cost of equity
Rd = Cost of debt
Tc = Corporate tax rate`}
                terms={waccTerms}
                description={mode === 'simple' 
                  ? 'The average cost to fund a company (mix of stock & debt costs)'
                  : 'Weighted Average Cost of Capital - the average rate a company expects to pay to finance its assets'}
              />
            </AnimatedChart>

            <AnimatedChart delay={0.2}>
              <FormulaExplainer
                title="NPV Formula"
                formula={`NPV = Σ[CFt / (1 + r)^t] - Initial Investment

Where:
CFt = Cash flow at time t
r = Discount rate
t = Time period`}
                terms={npvTerms}
                description={mode === 'simple' 
                  ? 'Is this investment worth it? If NPV > 0, yes!'
                  : 'Net Present Value - the difference between present value of cash inflows and outflows'}
              />
            </AnimatedChart>
          </div>
        </div>

        {/* DCF Calculator with Sensitivity Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* DCF Input & Output */}
          <AnimatedChart delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator size={24} />
                  {mode === 'simple' ? 'Company Value Calculator' : 'DCF Quick Valuation'}
                </CardTitle>
                <CardDescription>
                  {mode === 'simple' 
                    ? 'Enter some numbers and watch the magic happen'
                    : 'Simplified discounted cash flow calculator'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fcf">
                    {mode === 'simple' ? 'Yearly Cash Flow ($)' : 'Free Cash Flow ($)'}
                  </Label>
                  <Input
                    id="fcf"
                    type="number"
                    placeholder="e.g., 1000000"
                    value={dcfInputs.fcf}
                    onChange={(e) => setDcfInputs({ ...dcfInputs, fcf: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="growthRate">
                    {mode === 'simple' ? 'Growth Rate (%)' : 'Terminal Growth Rate (%)'}
                  </Label>
                  <Input
                    id="growthRate"
                    type="number"
                    placeholder="e.g., 5"
                    value={dcfInputs.growthRate}
                    onChange={(e) => setDcfInputs({ ...dcfInputs, growthRate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="wacc">
                    {mode === 'simple' ? 'Discount Rate (%)' : 'WACC (%)'}
                  </Label>
                  <Input
                    id="wacc"
                    type="number"
                    placeholder="e.g., 10"
                    value={dcfInputs.wacc}
                    onChange={(e) => setDcfInputs({ ...dcfInputs, wacc: e.target.value })}
                  />
                </div>

                <motion.div
                  className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    {mode === 'simple' ? 'Company Value' : 'Enterprise Value'}
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    key={dcfValue}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {dcfValue !== null
                      ? `$${dcfValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
                      : dcfInputs.fcf && dcfInputs.growthRate && dcfInputs.wacc && parseFloat(dcfInputs.wacc) <= parseFloat(dcfInputs.growthRate)
                      ? 'Error: WACC must be > growth'
                      : '$--'}
                  </motion.div>
                </motion.div>

                {/* Interpretation */}
                {dcfValue && (
                  <motion.div
                    className="p-4 bg-muted rounded-lg text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-semibold mb-2">
                      {mode === 'simple' ? '💡 What this means:' : '📊 Interpretation:'}
                    </p>
                    <p className="text-muted-foreground">
                      {mode === 'simple' 
                        ? `If the company generates $${parseInt(dcfInputs.fcf).toLocaleString()} per year and grows at ${dcfInputs.growthRate}%, it's worth about $${(dcfValue / 1000000).toFixed(1)}M today. The ${dcfInputs.wacc}% discount rate accounts for risk and time value.`
                        : `Based on a perpetual growth model with ${dcfInputs.growthRate}% terminal growth rate and ${dcfInputs.wacc}% WACC, the enterprise value is $${(dcfValue / 1000000).toFixed(2)}M. This assumes constant cash flow growth and discount rate.`}
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </AnimatedChart>

          {/* Sensitivity Heatmap */}
          <AnimatedChart delay={0.4}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp size={24} />
                  {mode === 'simple' ? 'What-If Scenario' : 'Sensitivity Analysis'}
                </CardTitle>
                <CardDescription>
                  {mode === 'simple' 
                    ? 'See how value changes with different assumptions'
                    : 'Impact of varying WACC and growth rate on valuation'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {dcfInputs.fcf && parseFloat(dcfInputs.fcf) > 0 ? (
                  <SensitivityHeatmap
                    baseValue={parseFloat(dcfInputs.fcf)}
                    waccRange={[6, 8, 10, 12, 14]}
                    growthRange={[2, 3, 4, 5, 6]}
                  />
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Enter cash flow values to see sensitivity analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>

        {/* Annotation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="inline-block font-handwritten text-lg text-green-600 bg-green-50 px-6 py-3 rounded-lg transform rotate-1">
            {mode === 'simple' 
              ? 'Finance is fun when you can actually play with it! 🎯'
              : 'Interactive tools for financial modeling and analysis 📊'}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
