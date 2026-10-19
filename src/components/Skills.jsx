import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          04 — Skill
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Skill &amp; Tools
        </h2>

        {/* Chip tipis per kelompok, tanpa progress bar / persentase */}
        <dl className="mt-14 max-w-3xl space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-line pt-6">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {group.title}
              </dt>
              <dd className="mt-4">
                <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Skills
