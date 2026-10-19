import { profile } from '../data/profile'
import { techSkillGroups, softSkills } from '../data/skills'

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

        {/* Skill & Tools — digabung ke sini (dulu section terpisah).
            Chip berlogo untuk skill teknis, chip teks untuk kemampuan profesional. */}
        <div className="mt-16" id="skills">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Skill &amp; Tools
          </p>

          <dl className="mt-10 max-w-3xl">
            <div className="grid gap-10 sm:grid-cols-2">
              {techSkillGroups.map((group) => (
                <div key={group.title}>
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {group.title}
                  </dt>
                  <dd className="mt-4">
                    <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted"
                        >
                          <img
                            src={item.logo}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-4 w-4 shrink-0 object-contain"
                          />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </div>

            {/* Kemampuan profesional — chip teks tanpa logo */}
            <div className="mt-10 border-t border-line pt-6">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Kemampuan Profesional
              </dt>
              <dd className="mt-4">
                <ul className="flex flex-wrap gap-2" aria-label="Kemampuan Profesional">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line px-3 py-1.5 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
