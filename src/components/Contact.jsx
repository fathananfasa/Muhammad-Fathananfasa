import { ExternalLink, Mail } from 'lucide-react'
import { contacts } from '../data/links'

/**
 * lucide-react (versi baru) tidak lagi menyediakan ikon brand seperti
 * Github/Linkedin — makanya tautan web pakai ikon external link.
 */
const linkIcons = {
  mailto: Mail,
  web: ExternalLink,
}

function iconFor(href) {
  return href.startsWith('mailto:') ? linkIcons.mailto : linkIcons.web
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          05 — Kontak
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Mari Terhubung
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Tertarik berdiskusi soal peluang kerja atau kolaborasi? Silakan hubungi
          saya lewat salah satu tautan berikut:
        </p>

        <ul className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          {contacts.map((contact) => {
            const Icon = iconFor(contact.href)
            return (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  {...(contact.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="inline-flex items-center gap-2.5 rounded-md border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent-hover"
                >
                  <Icon aria-hidden="true" size={16} />
                  {contact.value}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Contact
