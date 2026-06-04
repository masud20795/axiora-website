'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const stats = [
  { value: '41+', label: 'Leads Delivered', sub: 'Hot qualified prospects' },
  { value: '3', label: 'Projects Completed', sub: 'US, UK & Japan' },
  { value: '3', label: 'Countries Reached', sub: 'Global campaigns' },
  { value: '2 Weeks', label: 'Avg. Delivery', sub: 'From kickoff to results' },
]

export default function Stats() {
  return (
    <section className="section-padding bg-surface border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-5xl md:text-6xl font-black text-primary mb-2 text-glow-green"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white font-bold text-base mb-1">{stat.label}</div>
                <div className="text-muted text-sm">{stat.sub}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
