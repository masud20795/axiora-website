'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTASection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-primary/20"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(123,97,255,0.05) 100%)',
            }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-primary opacity-50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-primary opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-glow opacity-30" />
            </div>

            <div className="relative z-10">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Ready to Grow?
              </span>
              <h2 className="heading-lg mb-4">
                Stop Chasing Leads.
                <br />
                <span className="text-primary">Start Receiving Them.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
                Book a free 30-minute strategy call. We&apos;ll audit your current outbound, identify gaps,
                and show you exactly what a custom GTM system would look like for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2 text-lg px-10 py-4">
                  <Calendar className="w-5 h-5" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-outline text-lg px-8 py-4">
                  Explore Services
                </Link>
              </div>

              <p className="text-muted text-sm mt-6">
                No commitment. No pressure. Just a real conversation about your growth.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
