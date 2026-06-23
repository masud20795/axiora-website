import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react'

const footerLinks = {
  Services: [
    { href: '/services#lead-gen', label: 'Lead Generation' },
    { href: '/services#gtm-automation', label: 'GTM Automation' },
    { href: '/services#ai-outreach', label: 'AI Outreach' },
    { href: '/services#crm', label: 'CRM Setup' },
    { href: '/services#web-dev', label: 'Web Development' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ],
}

const socials = [
  { href: 'https://www.linkedin.com/in/masud-abdullah-al-616992203/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/20795masud', icon: Twitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/abdullahmasud74/', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com/@axioragtm', icon: Youtube, label: 'YouTube' },
  { href: 'https://facebook.com/axioragtm', icon: Facebook, label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/axiora-logo.png"
                alt="Axiora GTM Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-black tracking-tight">
                Axiora<span className="text-primary">GTM</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              We build done-for-you outbound systems that combine AI automation, lead generation,
              and multi-channel campaigns to fill your B2B pipeline.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:outreachaxiora@gmail.com"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                outreachaxiora@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Axiora GTM. All rights reserved.
          </p>
          <p className="text-muted text-sm">
            Built for B2B growth. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
