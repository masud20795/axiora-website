'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Calendar, Clock, CheckCircle, Send, Linkedin, Twitter, Instagram, MapPin } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const reasons = [
  'Book a free strategy call',
  'Get a custom quote',
  'Ask about a specific service',
  'Discuss a partnership',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h1 className="heading-xl mb-6">
              Let&apos;s Talk About
              <br />
              <span className="text-primary">Your Pipeline</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              Book a free 30-minute strategy call or send us a message.
              We respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Info + Calendly */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calendly Placeholder */}
              <AnimatedSection direction="left">
                <div className="p-8 rounded-2xl bg-surface border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-60" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Book a Strategy Call</h3>
                      <p className="text-muted text-xs">Free · 30 minutes · No commitment</p>
                    </div>
                  </div>

                  {/* Calendly embed placeholder */}
                  <div className="rounded-xl bg-background border border-border p-8 text-center mb-4">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-3 opacity-50" />
                    <p className="text-muted text-sm mb-4">
                      Calendly integration coming soon.
                      <br />
                      Use the form or email to book now.
                    </p>
                    <a
                      href="mailto:outreachaxiora@gmail.com?subject=Strategy Call Request"
                      className="btn-primary text-sm py-2.5 px-5 inline-block"
                    >
                      Email to Book
                    </a>
                  </div>

                  <div className="space-y-2">
                    {[
                      { icon: Clock, text: '30-minute deep-dive' },
                      { icon: CheckCircle, text: 'GTM audit included' },
                      { icon: CheckCircle, text: 'No-pressure conversation' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2 text-sm text-muted">
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="p-6 rounded-2xl bg-surface border border-border space-y-5">
                  <h3 className="text-white font-bold text-lg">Contact Info</h3>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Email</div>
                      <a href="mailto:outreachaxiora@gmail.com" className="text-muted text-sm hover:text-primary transition-colors">
                        outreachaxiora@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Location</div>
                      <span className="text-muted text-sm">Japan · Working Globally</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {[
                      { href: 'https://www.linkedin.com/in/masud-abdullah-al-616992203/', icon: Linkedin, label: 'LinkedIn' },
                      { href: 'https://x.com/20795masud', icon: Twitter, label: 'Twitter' },
                      { href: 'https://instagram.com/axioragtm', icon: Instagram, label: 'Instagram' },
                    ].map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Why contact */}
              <AnimatedSection direction="left" delay={0.15}>
                <div className="p-6 rounded-2xl bg-surface border border-border">
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                    Why People Reach Out
                  </h3>
                  <ul className="space-y-2">
                    {reasons.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-muted text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="p-8 md:p-10 rounded-2xl bg-surface border border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-40" />

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-white font-black text-2xl mb-3">Message Sent!</h3>
                      <p className="text-muted">
                        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-white font-bold text-2xl mb-2">Send a Message</h2>
                      <p className="text-muted text-sm mb-8">
                        Fill out the form and I&apos;ll reply within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Your Name <span className="text-primary">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Smith"
                              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white mb-2">
                              Email Address <span className="text-primary">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Inc."
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Service Interested In
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                          >
                            <option value="" className="bg-background">Select a service...</option>
                            <option value="lead-gen" className="bg-background">Lead Generation</option>
                            <option value="gtm-automation" className="bg-background">GTM Automation</option>
                            <option value="ai-outreach" className="bg-background">AI Outreach</option>
                            <option value="n8n" className="bg-background">n8n Workflows</option>
                            <option value="web-dev" className="bg-background">Web Development</option>
                            <option value="crm" className="bg-background">CRM Setup</option>
                            <option value="full-system" className="bg-background">Full GTM System</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Message <span className="text-primary">*</span>
                          </label>
                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your business, current challenges, and what you're hoping to achieve..."
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </motion.button>

                        <p className="text-muted text-xs text-center">
                          By submitting, you agree to receive a response at the email provided. No spam, ever.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
