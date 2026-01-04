"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LineChart, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";
import SketchWrapper from "@/components/SketchWrapper";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="mb-4">
            <span className="font-handwritten text-primary text-xl">
              👋 Hello, I'm
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {profile.name}
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-muted-foreground mb-4">
            {profile.headline}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            {profile.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/experience">
              <Button size="lg" className="gap-2">
                <LineChart className="w-5 h-5" />
                View Deal Room
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/risk-lab">
              <Button size="lg" variant="outline" className="gap-2">
                <Calculator className="w-5 h-5" />
                Open Risk Lab
              </Button>
            </Link>
          </div>

          {/* Hand-drawn annotation */}
          <SketchWrapper className="mt-16 max-w-2xl">
            <p className="font-handwritten text-lg">
              "I build data-driven solutions that transform complex financial problems into actionable insights."
            </p>
          </SketchWrapper>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "M&A Deals", value: "5+" },
            { label: "Projects Built", value: "12+" },
            { label: "Certifications", value: "4+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
