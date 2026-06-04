'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function NextSuccessStory() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-secondary/20"
            style={{
              background: 'linear-gradient(135deg, rgba(123,97,255,0.06) 0%, rgba(0,255,136,0.04) 100%)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-purple-glow opacity-20" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-medium text-secondary">Limited Spots Available</span>
              </motion.div>

              <h2 className="heading-lg mb-4">
                Ready to Be Our
                <br />
                <span className="text-primary">Next Success Story?</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
                We&apos;re selective about who we work with. If you&apos;re serious about building
                a real outbound system, let&apos;s talk.
              </p>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
