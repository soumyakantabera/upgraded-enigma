"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TerminalBlock from "@/components/TerminalBlock";
import SketchWrapper from "@/components/SketchWrapper";

export default function RiskLabPage() {
  const [fcf, setFcf] = useState("1000");
  const [growthRate, setGrowthRate] = useState("5");
  const [wacc, setWacc] = useState("10");
  const [terminalGrowth, setTerminalGrowth] = useState("2");

  const calculateDCF = () => {
    const fcfValue = parseFloat(fcf);
    const g = parseFloat(growthRate) / 100;
    const w = parseFloat(wacc) / 100;
    const tg = parseFloat(terminalGrowth) / 100;

    // Validation: WACC must be greater than terminal growth rate
    if (w <= tg) {
      return {
        enterpriseValue: "N/A",
        pvForecast: "N/A",
        pvTerminal: "N/A",
      };
    }

    // Simple 5-year DCF calculation
    let pv = 0;
    let projectedFcf = fcfValue;
    
    for (let i = 1; i <= 5; i++) {
      projectedFcf = projectedFcf * (1 + g);
      pv += projectedFcf / Math.pow(1 + w, i);
    }

    // Terminal value
    const terminalFcf = projectedFcf * (1 + tg);
    const terminalValue = terminalFcf / (w - tg);
    const pvTerminal = terminalValue / Math.pow(1 + w, 5);

    return {
      enterpriseValue: (pv + pvTerminal).toFixed(2),
      pvForecast: pv.toFixed(2),
      pvTerminal: pvTerminal.toFixed(2),
    };
  };

  const result = calculateDCF();

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="font-handwritten text-primary">🧪</span> Risk Lab
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Interactive financial modeling and analysis tools
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DCF Quick Valuation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">DCF Quick Valuation</CardTitle>
              <CardDescription>
                Calculate enterprise value using discounted cash flow method
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fcf">Free Cash Flow (Year 0, $M)</Label>
                <Input
                  id="fcf"
                  type="number"
                  value={fcf}
                  onChange={(e) => setFcf(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="growth">Growth Rate (%)</Label>
                <Input
                  id="growth"
                  type="number"
                  value={growthRate}
                  onChange={(e) => setGrowthRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wacc">WACC (%)</Label>
                <Input
                  id="wacc"
                  type="number"
                  value={wacc}
                  onChange={(e) => setWacc(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="terminal">Terminal Growth Rate (%)</Label>
                <Input
                  id="terminal"
                  type="number"
                  value={terminalGrowth}
                  onChange={(e) => setTerminalGrowth(e.target.value)}
                />
              </div>

              <SketchWrapper className="mt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">PV of Forecast Period:</span>
                    <span className="font-mono">${result.pvForecast}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">PV of Terminal Value:</span>
                    <span className="font-mono">${result.pvTerminal}M</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-bold">Enterprise Value:</span>
                    <span className="font-mono font-bold text-primary text-xl">
                      ${result.enterpriseValue}M
                    </span>
                  </div>
                </div>
              </SketchWrapper>
            </CardContent>
          </Card>

          {/* Finance Formulas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Finance Formulas</CardTitle>
                <CardDescription>
                  Key valuation and risk metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TerminalBlock title="WACC.formula">
                  <div className="space-y-2 text-xs">
                    <div className="text-green-600">{`// Weighted Average Cost of Capital`}</div>
                    <div className="text-yellow-600">WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))</div>
                    <div className="text-gray-400 mt-2">
                      <div>E = Market value of equity</div>
                      <div>D = Market value of debt</div>
                      <div>V = E + D</div>
                      <div>Re = Cost of equity</div>
                      <div>Rd = Cost of debt</div>
                      <div>Tc = Corporate tax rate</div>
                    </div>
                  </div>
                </TerminalBlock>

                <TerminalBlock title="NPV.formula">
                  <div className="space-y-2 text-xs">
                    <div className="text-green-600">{`// Net Present Value`}</div>
                    <div className="text-yellow-600">NPV = Σ [CFt / (1 + r)^t] - Initial Investment</div>
                    <div className="text-gray-400 mt-2">
                      <div>CFt = Cash flow at time t</div>
                      <div>r = Discount rate</div>
                      <div>t = Time period</div>
                    </div>
                  </div>
                </TerminalBlock>

                <TerminalBlock title="Sharpe.formula">
                  <div className="space-y-2 text-xs">
                    <div className="text-green-600">{`// Sharpe Ratio`}</div>
                    <div className="text-yellow-600">Sharpe = (Rp - Rf) / σp</div>
                    <div className="text-gray-400 mt-2">
                      <div>Rp = Portfolio return</div>
                      <div>Rf = Risk-free rate</div>
                      <div>σp = Portfolio standard deviation</div>
                    </div>
                  </div>
                </TerminalBlock>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Forecast Playground</CardTitle>
                <CardDescription>
                  Monte Carlo simulation and scenario analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p className="mb-4">Coming Soon</p>
                  <p className="text-sm">
                    Run thousands of simulations to model uncertainty in your forecasts
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
