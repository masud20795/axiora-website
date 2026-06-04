'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const caseStudies = [
  {
    flag: '🇺🇸',
    country: 'United States',
    industry: 'Roofing & Construction',
    title: 'US Roofing Companies Pipeline',
    result: '200+ leads',
    metric: '200+',
    metricLabel: 'Targeted Companies',
    description: 'Used Google Maps scraping + Apollo enrichment to build a hyper-local list of 200+ roofing companies across the US, then ran a targeted email sequence.',
    tags: ['Google Maps', 'Apollo.io', 'Email Outreach'],
    color: 'text-primary',
    href: '/case-studies#us-roofing',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    industry: 'Marketing Agencies',
    title: 'UK Agency Cold Outreach',
    result: '41 hot prospects',
    metric: '41',
    metricLabel: 'Hot Prospects',
    description: 'Scraped Facebook for UK marketing agencies without a website, enriched data with Clay, and ran a personalized email campaign. Delivered 41 hot prospects.',
    tags: ['Facebook Scraping', 'Clay', 'Smartlead'],
    color: 'text-secondary',
    href: '/case-studies#uk-marketing',
  },
  {
    flag: '🇯🇵',
    country: 'Japan',
    industry: 'Manufacturing',
    title: 'Japan Manufacturing Outreach',
    result: 'LinkedIn + Email',
    metric: '3',
    metricLabel: 'Countries Reached',
    description: 'Combined LinkedIn prospecting and Apollo enrichment to reach decision-makers at Japanese manufacturing firms, opening new market opportunities.',
    tags: ['LinkedIn', 'Apollo.io', 'Multi-Channel'],
    color: 'text-primary',
    href: '/case-studies#japan-mfg',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-surface" id="case-studies">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Proof of Work
          </span>
          <h2 className="heading-lg mb-4">
            Real Results, Real Companies
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We&apos;re early-stage but our results speak for themselves. Here&apos;s what we&apos;ve built.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.title} delay={i * 0.12}>
              <Link href={cs.href}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-3xl">{cs.flag}</span>
                    <div>
                      <div className="text-xs text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {cs.country}
                      </div>
                      <div className="text-xs text-muted">{cs.industry}</div>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="mb-5 p-4 rounded-xl bg-surface border border-border">
                    <div className={`text-4xl font-black ${cs.color} mb-1`}>{cs.metric}</div>
                    <div className="text-white text-sm font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      {cs.metricLabel}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {cs.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-surface border border-border text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link href="/case-studies" className="btn-outline">
            View All Case Studies
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
