'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Strategy Call',
    description: "We dive deep into your ICP, existing pipeline, and growth targets. Together we define the exact system you need — no cookie-cutter templates.",
    detail: '30-minute discovery session',
  },
  {
    number: '02',
    title: 'Build & Launch',
    description: 'Our team builds your lead lists, writes personalized copy, configures automation workflows, and launches your outbound system within 2 weeks.',
    detail: '7–14 day turnaround',
  },
  {
    number: '03',
    title: 'Leads Hit Your Inbox',
    description: 'Qualified prospects who match your ICP land directly in your inbox or CRM, ready to be closed. You focus on conversations, we handle everything else.',
    detail: 'Ongoing optimization included',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-surface" id="how-it-works">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="heading-lg mb-4">
            From Zero to Pipeline in 3 Steps
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We handle every step of the outbound build. You just show up for strategy and close deals.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative text-center group"
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary mb-6 mx-auto glow-green">
                    <span className="text-primary font-black text-xl">{step.number}</span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                    {step.detail}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
