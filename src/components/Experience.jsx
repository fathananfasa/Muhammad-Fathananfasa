import { useState } from 'react'
import Modal from './Modal'
import { experiences } from '../data/experience'

function Experience() {
  const [openIndex, setOpenIndex] = useState(null)
  const openExp = experiences[openIndex]

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          03 — Pengalaman
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Pengalaman
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-muted">
          Klik kartu untuk melihat rincian tanggung jawab dan dokumentasinya.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => {
            const cover = exp.documentation[0].images[0]
            return (
              <button
                key={exp.company}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-haspopup="dialog"
                className="w-full rounded-lg border border-line bg-surface p-4 text-left transition-colors hover:border-accent md:p-5"
              >
                <img
                  src={cover.src}
                  alt={cover.alt}
                  loading="lazy"
                  width={cover.width}
                  height={cover.height}
                  className="h-40 w-full rounded-md border border-line object-cover object-top"
                />

                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {exp.position}
                  </span>
                  <span className="text-sm text-muted">
                    {exp.period}
                    {exp.arrangementId && <span> · {exp.arrangementId}</span>}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium">{exp.company}</p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover">
                  Lihat detail
                  <span aria-hidden="true">→</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {openExp && (
        <Modal title={`${openExp.position} — ${openExp.company}`} onClose={() => setOpenIndex(null)}>
          <p className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {openExp.position}
          </p>

          <p className="mt-2 text-sm">
            {openExp.company}
            <span className="text-muted">
              {' '}
              · {openExp.period}
              {openExp.arrangementId && <span> · {openExp.arrangementId}</span>}
            </span>
          </p>

          <p className="mt-4 leading-relaxed text-muted">{openExp.descriptionId}</p>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Tanggung Jawab
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-muted">
            {openExp.responsibilitiesId.map((task) => (
              <li key={task} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">
                  –
                </span>
                {task}
              </li>
            ))}
          </ul>

          {openExp.documentation.map((group) => (
            <div key={group.label}>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {group.label}
              </p>
              <div className="mt-4 space-y-4">
                {group.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-md border border-line"
                  />
                ))}
              </div>
            </div>
          ))}
        </Modal>
      )}
    </section>
  )
}

export default Experience
