import { contacts } from '../data/links'

/**
 * Tautan kontak kini tampil sebagai tombol logo saja (ikon 44×44px, sesuai
 * ukuran minimum target sentuh). Label lengkap dipindah ke aria-label/tooltip.
 */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          04 — Kontak
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Mari Terhubung
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Tertarik berdiskusi soal peluang kerja atau kolaborasi? Silakan hubungi
          saya lewat salah satu tautan berikut:
        </p>

        <ul className="mt-10 flex items-center gap-3">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                {...(contact.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                aria-label={`${contact.label} — ${contact.value}`}
                title={`${contact.label} — ${contact.value}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line transition-colors hover:border-accent"
              >
                <img
                  src={contact.logo}
                  alt=""
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
