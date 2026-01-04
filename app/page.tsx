'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/config/profile"
import SketchWrapper from "@/components/SketchWrapper"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {profile.name}
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
            {profile.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/experience">
              <Button size="lg" className="gap-2">
                <TrendingUp size={20} />
                View Deal Room
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/risk-lab">
              <Button size="lg" variant="outline" className="gap-2">
                <LineChart size={20} />
                Open Risk Lab
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative annotations */}
        <motion.div
          className="absolute top-1/4 right-10 hidden lg:block"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="font-handwritten text-lg text-blue-600 bg-yellow-100 px-4 py-2 rounded rotate-3 shadow-md">
            Finance meets Tech →
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-10 hidden lg:block"
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="font-handwritten text-lg text-purple-600 bg-pink-100 px-4 py-2 rounded -rotate-3 shadow-md">
            ← Data-driven insights
          </div>
        </motion.div>
      </section>

      {/* Quick intro section */}
      <section className="py-16">
        <SketchWrapper className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            {profile.bio}
          </p>
        </SketchWrapper>
      </section>
    </div>
  )
}
