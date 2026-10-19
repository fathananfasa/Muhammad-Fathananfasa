import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {profile.headlineId}
      </p>

      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {profile.taglineId}
      </p>

      <p className="mt-3 text-sm text-muted">
        {profile.role} · {profile.location}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-base transition-colors hover:bg-accent-hover"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="rounded-md border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent-hover"
        >
          Hubungi
        </a>
      </div>
    </section>
  )
}

export default Hero
