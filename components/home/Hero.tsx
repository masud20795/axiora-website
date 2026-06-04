'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-glow opacity-60" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-purple-glow opacity-40" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.08) 0%, transparent 70%)' }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-surface border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted">
              GTM Engineering · AI Automation · Done-For-You
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            We Build Outbound Systems
            <br />
            <span className="text-primary text-glow-green">That Fill Your Pipeline</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Done-for-you GTM systems combining AI automation, lead generation,
            and multi-channel outreach. We deliver qualified pipeline — you close deals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary flex items-center gap-2 text-base">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="btn-outline flex items-center gap-2 text-base">
              <Play className="w-4 h-4" />
              See Our Results
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted"
          >
            {[
              '✓ 41+ Hot Prospects Delivered',
              '✓ 3 Countries Served',
              '✓ 100% Done-For-You',
              '✓ Results in 2 Weeks',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1">{item}</span>
            ))}
          </motion.div>
        </div>

        {/* Floating cards */}
        <div className="mt-20 relative max-w-4xl mx-auto hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />
            <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'Leads Delivered', value: '41+', sub: 'Hot qualified prospects' },
                { label: 'Projects Completed', value: '3', sub: 'US, UK & Japan' },
                { label: 'Avg. Delivery', value: '2 Wks', sub: 'From kickoff to results' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-muted text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}
