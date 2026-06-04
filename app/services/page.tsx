import type { Metadata } from 'next'
import { Target, Bot, Mail, Workflow, Globe, Database, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Services — Axiora GTM',
  description: 'Full-stack GTM services: lead generation, AI automation, outbound campaigns, n8n workflows, CRM setup, and web development.',
}

const services = [
  {
    id: 'lead-gen',
    icon: Target,
    title: 'Lead Generation',
    tagline: 'Your pipeline starts here.',
    description: 'We build hyper-targeted prospect lists tailored to your exact ICP using a combination of Apollo.io, Clay, and custom web scraping. No generic databases — just the exact decision-makers you need to reach.',
    features: [
      'ICP definition and refinement',
      'Apollo.io prospect sourcing',
      'Clay data enrichment pipeline',
      'Google Maps & Facebook scraping',
      'LinkedIn Sales Navigator export',
      'Contact verification & deduplication',
      'Deliverable: Clean CSV / CRM-ready list',
    ],
    color: 'primary',
  },
  {
    id: 'gtm-automation',
    icon: Bot,
    title: 'GTM Automation',
    tagline: 'Remove the manual work entirely.',
    description: 'End-to-end GTM workflows built with n8n that automate everything from prospect discovery to follow-up sequences. Once built, your outbound system runs 24/7 without you.',
    features: [
      'Full outbound workflow design',
      'n8n automation build',
      'AI personalization at scale',
      'CRM auto-sync and tagging',
      'Slack/email notifications',
      'Error handling & logging',
      'Monthly workflow review',
    ],
    color: 'secondary',
  },
  {
    id: 'ai-outreach',
    icon: Mail,
    title: 'AI Outreach Campaigns',
    tagline: 'Emails that actually get replies.',
    description: 'Personalized multi-channel outreach campaigns combining AI-written copy, strategic sequencing, and Smartlead deliverability optimization. We write, send, and manage everything.',
    features: [
      'AI-personalized email copywriting',
      'Smartlead campaign setup',
      'A/B testing sequences',
      'Domain warm-up management',
      'Reply handling & classification',
      'LinkedIn connection campaigns',
      'Weekly performance reports',
    ],
    color: 'primary',
  },
  {
    id: 'n8n',
    icon: Workflow,
    title: 'n8n Workflow Builds',
    tagline: 'Automate anything, connect everything.',
    description: 'Custom n8n automation pipelines that connect your CRM, email tools, data sources, and AI — saving your team 20+ hours per week on repetitive GTM tasks.',
    features: [
      'Requirements discovery call',
      'Custom workflow architecture',
      'API integrations (100+ apps)',
      'AI/GPT integrations',
      'Webhook and trigger setup',
      'Documentation & handoff',
      'Ongoing support available',
    ],
    color: 'secondary',
  },
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web Development',
    tagline: 'Your digital first impression.',
    description: 'High-converting landing pages and agency websites built with Next.js and Tailwind CSS. Designed to communicate value fast and turn visitors into booked calls.',
    features: [
      'Next.js + Tailwind development',
      'Mobile-first responsive design',
      'Dark/modern aesthetic',
      'Framer Motion animations',
      'Calendly integration',
      'Contact form setup',
      'Vercel deployment',
    ],
    color: 'primary',
  },
  {
    id: 'crm',
    icon: Database,
    title: 'CRM Setup',
    tagline: 'Sales infrastructure that scales.',
    description: 'HubSpot and CRM configuration built for sales velocity. We set up your pipeline stages, contact properties, deal workflows, and reporting dashboards from scratch.',
    features: [
      'HubSpot portal audit/setup',
      'Pipeline stage design',
      'Custom contact properties',
      'Deal automation workflows',
      'Email sequence setup',
      'Reporting dashboards',
      'Team onboarding session',
    ],
    color: 'secondary',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h1 className="heading-xl mb-6">
              Everything You Need to
              <br />
              <span className="text-primary">Build Pipeline</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto mb-10">
              Full-stack GTM services from lead data to closed deals. Pick one service or combine them for a complete outbound system.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Custom Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={service.id} delay={0.1} id={service.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className={`w-14 h-14 rounded-2xl ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-6`}>
                        <Icon className={`w-7 h-7 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                      <span className={`text-sm font-semibold uppercase tracking-widest mb-2 block ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {service.tagline}
                      </span>
                      <h2 className="heading-md mb-4">{service.title}</h2>
                      <p className="text-muted leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>
                      <Link href="/contact" className="btn-primary text-sm py-2.5 px-5 inline-flex items-center gap-1">
                        Get a Custom Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Features card */}
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="p-8 rounded-2xl bg-surface border border-border">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                              <span className="text-muted text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {i < services.length - 1 && (
                    <div className="mt-16 border-t border-border" />
                  )}
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Not Sure Where to Start?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Book a free 30-minute call. We&apos;ll review your current setup and recommend the right services for your stage and goals.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Book a Free Strategy Call
            </Link>
            <p className="text-muted text-sm mt-8 max-w-xl mx-auto">
              Every engagement is scoped based on your goals, timeline, and existing stack.
              Book a call and we&apos;ll build a custom plan.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
