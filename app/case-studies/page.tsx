import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Clock, CheckCircle, ArrowRight, Target, Users, BarChart3 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Case Studies — Axiora GTM',
  description: 'Real results from real GTM campaigns: US roofing, UK marketing agencies, and Japan manufacturing.',
}

const caseStudies = [
  {
    id: 'us-roofing',
    flag: '🇺🇸',
    badge: 'Lead Generation',
    badgeColor: 'bg-primary/10 text-primary',
    country: 'United States',
    industry: 'Roofing & Construction',
    title: 'US Roofing Companies: Google Maps to Qualified Pipeline',
    duration: '2 weeks',
    status: 'Completed',
    metrics: [
      { icon: Target, label: 'Companies Found', value: '200+' },
      { icon: Users, label: 'Decision Makers', value: '150+' },
      { icon: BarChart3, label: 'Outreach Sent', value: '500+' },
      { icon: TrendingUp, label: 'Response Rate', value: '8%' },
    ],
    challenge: 'A client needed to find roofing companies across specific US states for a B2B service. No existing database had the granular geographic filtering needed, and manual research would take weeks.',
    solution: [
      'Built a custom Google Maps scraper using Apify to extract roofing companies by zip code and city',
      'Enriched each company with Apollo.io to find owner/decision-maker contact info',
      'Cleaned and deduplicated the list using Clay workflows',
      'Wrote personalized email sequences targeting pain points of roofing business owners',
      'Launched cold email campaign via Smartlead with proper warm-up',
    ],
    results: [
      '200+ verified roofing companies with owner contact info',
      '150+ direct email addresses for decision makers',
      '8% positive response rate (industry avg: 2-3%)',
      'Full campaign running within 2 weeks of kickoff',
    ],
    tools: ['Apify', 'Apollo.io', 'Clay', 'Smartlead', 'n8n'],
    color: 'primary',
  },
  {
    id: 'uk-marketing',
    flag: '🇬🇧',
    badge: 'AI Outreach',
    badgeColor: 'bg-secondary/10 text-secondary',
    country: 'United Kingdom',
    industry: 'Marketing Agencies',
    title: 'UK Marketing Agencies: Facebook Scraping to 41 Hot Prospects',
    duration: '10 days',
    status: 'Completed',
    metrics: [
      { icon: Target, label: 'Agencies Found', value: '300+' },
      { icon: Users, label: 'Enriched Contacts', value: '180+' },
      { icon: BarChart3, label: 'Qualified Leads', value: '41' },
      { icon: TrendingUp, label: 'Conversion Rate', value: '14%' },
    ],
    challenge: 'The client wanted to target small UK marketing agencies that had a Facebook presence but no dedicated website — a strong indicator of agencies who needed web development and GTM services.',
    solution: [
      'Built a custom Facebook scraper to find UK marketing agency pages without linked websites',
      'Filtered by follower count, post frequency, and location for quality control',
      'Used Clay to enrich each agency with owner name, email, and LinkedIn profile',
      'Crafted hyper-personalized outreach based on each agency\'s specific pain point (no website)',
      'Deployed multi-touch email sequence via Smartlead over 14 days',
    ],
    results: [
      '300+ UK marketing agencies identified from Facebook',
      '180+ enriched with owner contact information',
      '41 hot prospects who engaged positively with the campaign',
      'Campaign cost 80% less than LinkedIn ads for same reach',
    ],
    tools: ['Facebook Scraper', 'Clay', 'Smartlead', 'Apollo.io', 'OpenAI'],
    color: 'secondary',
  },
  {
    id: 'japan-mfg',
    flag: '🇯🇵',
    badge: 'Multi-Channel',
    badgeColor: 'bg-primary/10 text-primary',
    country: 'Japan',
    industry: 'Manufacturing',
    title: 'Japan Manufacturing: Cross-Channel Outreach for New Markets',
    duration: '3 weeks',
    status: 'Completed',
    metrics: [
      { icon: Target, label: 'Manufacturers Found', value: '120+' },
      { icon: Users, label: 'Contacts Enriched', value: '90+' },
      { icon: BarChart3, label: 'LinkedIn Connects', value: '60+' },
      { icon: TrendingUp, label: 'Email Opens', value: '32%' },
    ],
    challenge: 'A client was targeting Japanese manufacturing companies for a B2B supply chain solution. The challenge was finding accurate English-language contact data for Japanese companies and crafting outreach that resonated with the formal Japanese business culture.',
    solution: [
      'Used LinkedIn Sales Navigator to identify manufacturing decision-makers in Japan',
      'Cross-referenced with Apollo.io for email addresses and company data',
      'Built an n8n workflow to automatically enrich and score prospects',
      'Created culture-sensitive email copy with formal tone and translated subject lines',
      'Set up a LinkedIn connection request campaign as a warm-up layer before cold email',
    ],
    results: [
      '120+ Japanese manufacturers identified across target segments',
      '90+ contacts with verified email + LinkedIn profiles',
      '60+ LinkedIn connections accepted within the first week',
      '32% email open rate — well above the 21% B2B benchmark',
    ],
    tools: ['LinkedIn Sales Navigator', 'Apollo.io', 'n8n', 'Clay', 'Smartlead'],
    color: 'primary',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Proof of Work
            </span>
            <h1 className="heading-xl mb-6">
              Real Results.
              <br />
              <span className="text-primary">Real Companies.</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto">
              We&apos;re early-stage but our results already speak for themselves. Here are the campaigns we&apos;ve run and the outcomes we&apos;ve delivered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32">
        <div className="container-custom space-y-24">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.id} id={cs.id}>
              <div className="rounded-3xl bg-surface border border-border overflow-hidden">
                {/* Header */}
                <div className="p-8 md:p-12 border-b border-border">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-4xl">{cs.flag}</span>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${cs.badgeColor}`}>
                      {cs.badge}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1 border border-border rounded-full px-3 py-1">
                      <Clock className="w-3 h-3" /> {cs.duration}
                    </span>
                    <span className="text-xs text-primary border border-primary/30 rounded-full px-3 py-1">
                      ✓ {cs.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5" /> {cs.country} · {cs.industry}
                  </div>
                  <h2 className="heading-md max-w-3xl">{cs.title}</h2>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
                  {cs.metrics.map((metric) => {
                    const Icon = metric.icon
                    return (
                      <div key={metric.label} className="p-6 border-r border-border last:border-r-0 text-center">
                        <Icon className={`w-5 h-5 mx-auto mb-2 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                        <div className={`text-3xl font-black mb-1 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                          {metric.value}
                        </div>
                        <div className="text-muted text-xs">{metric.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">The Challenge</h3>
                    <p className="text-muted leading-relaxed mb-8">{cs.challenge}</p>

                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span key={tool} className="text-xs font-medium px-3 py-1.5 rounded-full bg-background border border-border text-muted">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Approach</h3>
                    <ul className="space-y-3 mb-8">
                      {cs.solution.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${cs.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                            {j + 1}
                          </span>
                          <span className="text-muted text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">The Results</h3>
                    <ul className="space-y-2">
                      {cs.results.map((result, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${cs.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                          <span className="text-muted text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Want Results Like These?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Every campaign starts with a strategy call. Book yours and let&apos;s map out what a custom GTM system looks like for your business.
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
