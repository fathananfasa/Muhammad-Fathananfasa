function ProjectCard({ project, onOpen }) {
  const cover = project.screenshots[0]

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="w-full rounded-lg border border-line bg-surface p-4 text-left transition-colors hover:border-accent md:p-5"
    >
      {/* Thumbnail kecil — tampilan ukuran penuh baru muncul di modal */}
      <img
        src={cover.src}
        alt={cover.alt}
        loading="lazy"
        width={cover.width}
        height={cover.height}
        className="h-40 w-full rounded-md border border-line object-cover object-top"
      />

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {project.context} · {project.type}
      </p>

      <span className="mt-2 block font-display text-xl font-semibold tracking-tight md:text-2xl">
        {project.name}
      </span>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {project.descriptionId}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover">
        Lihat detail
        <span aria-hidden="true">→</span>
      </span>
    </button>
  )
}

export default ProjectCard
