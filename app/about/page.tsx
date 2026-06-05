import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Target, Zap, Heart, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About — Axiora GTM',
  description: 'Learn about Abdullah Al Masud, founder of Axiora GTM, and our mission to build world-class outbound systems for B2B companies.',
}

const values = [
  {
    icon: Target,
    title: 'Results Over Activity',
    description: 'We measure success in pipeline generated, not emails sent. Every action ties back to qualified opportunities for your business.',
  },
  {
    icon: Zap,
    title: 'Speed Without Sacrifice',
    description: 'We move fast. Most campaigns are built and live within 2 weeks. Speed is a feature — not a risk.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We\'ve run campaigns across the US, UK, and Japan. We understand nuance across markets, cultures, and buyer behaviours.',
  },
  {
    icon: Heart,
    title: 'Founder-First Approach',
    description: 'We work directly with founders and decision-makers. No account managers, no hand-offs. You talk to the person building your system.',
  },
]

const timeline = [
  {
    year: '2025',
    title: 'Portfolio Project #1',
    description: 'Built a Google Maps scraping system targeting US roofing companies across 10 niches. Identified 200+ companies with owner contact info.',
  },
  {
    year: '2025',
    title: 'Portfolio Project #2',
    description: 'Built a custom Facebook scraper for UK marketing agencies without websites. Generated 41 qualified prospects with enriched contact data.',
  },
  {
    year: '2025',
    title: 'Portfolio Project #3',
    description: 'Built Japan manufacturing LinkedIn + Apollo multi-channel outreach pipeline. Reached decision-makers across 3 market segments.',
  },
  {
    year: '2025',
    title: 'n8n Automation Suite',
    description: 'Built a 35-workflow automation roadmap covering LinkedIn scraping, CRM sync, AI outreach, and a 33-node client acquisition system (in active development).',
  },
  {
    year: '2025',
    title: '13-Step Lead Machine',
    description: 'Built end-to-end Python lead generation system using Apify, Reoon, HubSpot, and Smartlead. Production-ready and fully documented.',
  },
  {
    year: '2026',
    title: 'Axiora GTM Founded',
    description: 'Launched as a full-service GTM agency focused on done-for-you outbound systems for B2B companies.',
  },
  {
    year: 'Now',
    title: 'Open for Clients',
    description: 'Ready to build custom outbound systems. First cohort of clients gets founder-level attention and priority delivery.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                About Axiora GTM
              </span>
              <h1 className="heading-xl mb-6">
                Built by a GTM
                <br />
                <span className="text-primary">Engineer Who Ships.</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed max-w-3xl">
                Axiora GTM was born from a simple frustration: most agencies talk about growth
                but can&apos;t show you the system behind it. We built our own — and now we build it for others.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl border-2 border-primary/40 overflow-hidden" style={{ boxShadow: '0 0 40px rgba(0,255,136,0.1)' }}>
                  <Image
                    src="/masud.jpg"
                    alt="Abdullah Al Masud - Founder, Axiora GTM"
                    width={480}
                    height={480}
                    className="w-full h-full object-cover object-top rounded-2xl"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-background border border-primary/30 rounded-2xl p-4 shadow-xl">
                  <div className="text-2xl font-black text-primary">3+</div>
                  <div className="text-xs text-muted">Countries Served</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
                The Founder
              </span>
              <h2 className="heading-md mb-6">Abdullah Al Masud</h2>

              <div className="space-y-4 text-muted leading-relaxed mb-8">
                <p>
                  I&apos;m a GTM engineer and automation builder based in Japan, working with B2B companies globally.
                  I started Axiora GTM because I saw a massive gap: companies needed outbound systems, not just tactics.
                </p>
                <p>
                  My background spans lead generation, cold email, n8n automation, web scraping with Apify, and
                  full-stack development with Next.js. I&apos;ve built campaigns that ran across the US, UK, and Japan —
                  all from my desk, using the exact same tools the world&apos;s best GTM teams use.
                </p>
                <p>
                  At Axiora GTM, I work directly with founders. No agency bloat, no account managers.
                  You get a senior practitioner building your system from day one.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['GTM Engineering', 'Lead Generation', 'n8n Automation', 'Cold Email', 'AI Outreach', 'Web Scraping', 'Next.js', 'HubSpot'].map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-muted">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  Work With Me <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://linkedin.com/in/abdullahmasud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Mission
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="text-center mb-16">
            <h2 className="heading-lg max-w-3xl mx-auto">
              Make World-Class Outbound{' '}
              <span className="text-primary">Accessible to Every B2B Company</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Journey
            </span>
            <h2 className="heading-lg">From First Campaign to Full Agency</h2>
          </AnimatedSection>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isNow = item.year === 'Now'
                return (
                  <AnimatedSection key={i} delay={i * 0.1} direction="left">
                    <div className="flex gap-6">
                      <div className="relative flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative border-2 ${isNow ? 'bg-primary/20 border-primary animate-pulse-slow' : 'bg-primary/10 border-primary/30'}`}>
                          {isNow
                            ? <span className="w-3 h-3 rounded-full bg-primary" />
                            : <CheckCircle className="w-5 h-5 text-primary" />
                          }
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${isNow ? 'text-secondary' : 'text-primary'}`}>
                          {item.year}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Ready to stop guessing on outbound and start building a system that works?
              Let&apos;s talk about what that looks like for your business.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
