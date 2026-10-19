import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Modal from './Modal'
import { projects } from '../data/projects'

function Projects() {
  const [openSlug, setOpenSlug] = useState(null)
  const openProject = projects.find((project) => project.slug === openSlug)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          02 — Proyek
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Proyek Pilihan
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-muted">
          Klik kartu untuk melihat detail lengkap proyek dan screenshot-nya.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={() => setOpenSlug(project.slug)}
            />
          ))}
        </div>
      </div>

      {openProject && (
        <Modal title={openProject.name} onClose={() => setOpenSlug(null)}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {openProject.context} · {openProject.type}
          </p>

          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {openProject.name}
          </h3>

          <p className="mt-4 leading-relaxed text-muted">
            {openProject.descriptionId}
          </p>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Fitur
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-muted">
            {openProject.featuresId.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">
                  –
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {openProject.searchDetailId && (
            <>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Sistem Pencarian
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {openProject.searchDetailId.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {openProject.contributionId && (
            <>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Kontribusi
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {openProject.contributionId.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Tech Stack
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
            {openProject.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Screenshot
          </p>
          <div className="mt-4 space-y-4">
            {openProject.screenshots.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={shot.width}
                height={shot.height}
                className="h-auto w-full rounded-md border border-line"
              />
            ))}
          </div>
        </Modal>
      )}
    </section>
  )
}

export default Projects
