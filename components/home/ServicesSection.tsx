'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Bot, Mail, Workflow, Globe, Database, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const services = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Hyper-targeted prospect lists built with Apollo, Clay, and custom scraping. We find your ideal customers before your competitors do.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    href: '/services#lead-gen',
  },
  {
    icon: Bot,
    title: 'GTM Automation',
    description: 'End-to-end GTM workflows automated with n8n and AI. From prospecting to follow-up — fully automated, fully personalized.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    href: '/services#gtm-automation',
  },
  {
    icon: Mail,
    title: 'AI Outreach',
    description: 'Personalized multi-channel campaigns via email and LinkedIn using Smartlead. AI-written copy that actually gets replies.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    href: '/services#ai-outreach',
  },
  {
    icon: Workflow,
    title: 'n8n Workflows',
    description: 'Custom automation pipelines connecting your entire tech stack. Save 20+ hours per week on manual GTM tasks.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    href: '/services#n8n',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-converting landing pages and websites built with Next.js. Designed to turn visitors into booked calls.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    href: '/services#web-dev',
  },
  {
    icon: Database,
    title: 'CRM Setup',
    description: 'HubSpot and CRM configuration built for sales velocity. Pipelines, sequences, and dashboards that keep your team aligned.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    href: '/services#crm',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="heading-lg mb-4">
            Full-Stack GTM Services
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to build a predictable outbound engine — from raw data to booked meetings.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -6, borderColor: 'rgba(0,255,136,0.3)' }}
                    className="group h-full p-6 rounded-2xl bg-surface border border-border transition-all duration-300 hover:bg-surface/80 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
