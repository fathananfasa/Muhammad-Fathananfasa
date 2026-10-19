import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          01 — Tentang
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Tentang Saya
        </h2>

        {/* Maks. 2 paragraf sesuai PRD bagian 6 */}
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
          <p>{profile.introId}</p>
          <p>{profile.aboutId}</p>
        </div>

        {/* Pendidikan — definisi sederhana dengan garis tipis */}
        <dl className="mt-10 max-w-2xl border-t border-line text-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-3">
            <dt className="text-muted">Pendidikan</dt>
            <dd>
              {profile.education.school} · {profile.education.major}
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-3">
            <dt className="text-muted">Periode</dt>
            <dd>
              {profile.education.period} · {profile.education.status}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
