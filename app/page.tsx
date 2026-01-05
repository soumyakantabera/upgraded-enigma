'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/config/profile"
import SketchWrapper from "@/components/SketchWrapper"
import ComplexPlaneHero from "@/components/ComplexPlaneHero"
import SketchUnderline from "@/components/SketchUnderline"
import DoodleArrow from "@/components/DoodleArrow"
import { useExplainMode } from "@/contexts/ExplainModeContext"

export default function Home() {
  const { mode } = useExplainMode()

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section with Complex Plane */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <SketchUnderline className="text-primary">
              {profile.name}
            </SketchUnderline>
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {profile.headline}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {mode === 'simple' 
              ? 'Complex finance → simple visuals'
              : profile.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/experience">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="gap-2">
                  <TrendingUp size={20} />
                  View Deal Room
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
            </Link>
            <Link href="/risk-lab">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <LineChart size={20} />
                  Open Risk Lab
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative annotations */}
        <motion.div
          className="absolute top-1/4 right-10 hidden xl:block"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="font-handwritten text-lg text-blue-600 bg-yellow-100 px-4 py-2 rounded rotate-3 shadow-md">
            Finance meets Tech →
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-10 hidden xl:block"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="font-handwritten text-lg text-purple-600 bg-pink-100 px-4 py-2 rounded -rotate-3 shadow-md">
            ← Data-driven insights
          </div>
        </motion.div>
      </section>

      {/* Complex Plane Interactive Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ComplexPlaneHero />
        </motion.div>
      </section>

      {/* Tagline with arrow */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <DoodleArrow direction="down" className="text-primary w-16 h-16" />
          <h2 className="text-3xl md:text-4xl font-bold">
            {mode === 'simple' 
              ? "I take complex finance and make it the easiest walkthrough you've ever seen"
              : "Transforming complex quantitative concepts into intuitive visual experiences"}
          </h2>
        </motion.div>
      </section>

      {/* Quick intro section */}
      <section className="py-16">
        <SketchWrapper className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              {profile.bio}
            </p>
          </motion.div>
        </SketchWrapper>
      </section>
    </div>
  )
}
