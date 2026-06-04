'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const tools = [
  { name: 'Apollo.io', category: 'Prospecting', emoji: '🚀' },
  { name: 'Clay', category: 'Data Enrichment', emoji: '🧱' },
  { name: 'n8n', category: 'Automation', emoji: '⚙️' },
  { name: 'HubSpot', category: 'CRM', emoji: '🟠' },
  { name: 'Smartlead', category: 'Email Outreach', emoji: '📧' },
  { name: 'Apify', category: 'Web Scraping', emoji: '🕷️' },
  { name: 'OpenAI', category: 'AI Writing', emoji: '🤖' },
  { name: 'LinkedIn', category: 'Social Outreach', emoji: '💼' },
]

export default function Tools() {
  return (
    <section className="section-padding bg-background" id="tools">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Stack
          </span>
          <h2 className="heading-lg mb-4">
            Best-In-Class Tools
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We use the same tech stack as the world&apos;s top GTM teams — expertly configured for your exact workflow.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <AnimatedSection key={tool.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(0,255,136,0.4)' }}
                className="p-5 rounded-2xl bg-surface border border-border text-center group transition-all duration-300 hover:bg-surface/80"
              >
                <div className="text-4xl mb-3">{tool.emoji}</div>
                <div className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                  {tool.name}
                </div>
                <div className="text-muted text-xs">{tool.category}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
          <p className="text-white font-semibold mb-1">Don&apos;t see your current tool?</p>
          <p className="text-muted text-sm">
            We integrate with 50+ platforms. Tell us your stack and we&apos;ll make it work.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
