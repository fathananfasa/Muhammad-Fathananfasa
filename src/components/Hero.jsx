import { profile } from '../data/profile'
import MarginNote from './decor/MarginNote'
import HandArrow from './decor/HandArrow'
import HandUnderline from './decor/HandUnderline'

function Hero() {
  return (
    <section id="top" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="md:grid md:grid-cols-[10.5rem_1fr] md:gap-8">
          {/* Catatan margin — desktop: menggantung di sisi garis margin,
              mobile: baris kecil di atas nama */}
          <p className="mb-6 md:mb-0 md:pt-4">
            <MarginNote rotate={-2}>{profile.headlineId}</MarginNote>
          </p>

          <div>
            {/* Satu momen load halaman: nama bergerak ringan sekali saja.
                Reduced motion mematikan animasi ini otomatis (index.css). */}
            <h1
              className="hero-in font-display font-[560] leading-[0.95] tracking-[-0.02em] text-ink text-[clamp(3.25rem,9vw,7.5rem)]"
              style={{ fontVariationSettings: '"WONK" 1' }}
            >
              {profile.name}
            </h1>

            <p className="mt-7 max-w-[34ch] text-lg leading-relaxed text-muted md:text-xl">
              {profile.taglineId}
            </p>

            {/* Baris data role/lokasi — dipisah garis tipis, bukan titik tengah */}
            <div className="mt-8 inline-flex items-baseline gap-4 border-t border-line pt-4 text-sm text-muted">
              <span>{profile.role}</span>
              <span aria-hidden="true" className="h-3 w-px self-center bg-line" />
              <span>{profile.location}</span>
            </div>

            {/* CTA text-link ala halaman buku: underline tangan selalu terlihat,
                hover mengganti warna + panahnya bergeser halus */}
            <div className="mt-12 flex flex-wrap items-start gap-x-10 gap-y-8">
              <a
                href="#projects"
                className="group inline-flex flex-col items-start gap-1.5 text-lg text-ink transition-colors hover:text-accent-hover"
              >
                <span className="flex items-center gap-2.5">
                  Lihat Proyek
                  <HandArrow
                    direction="down"
                    className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </span>
                <HandUnderline className="text-accent" />
              </a>

              <a
                href="#contact"
                className="group inline-flex flex-col items-start gap-1.5 text-lg text-ink transition-colors hover:text-accent-hover"
              >
                Hubungi
                <HandUnderline
                  className="text-accent transition-colors group-hover:text-accent-hover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
