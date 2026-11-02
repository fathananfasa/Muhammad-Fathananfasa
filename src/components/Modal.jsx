import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/**
 * Modal aksesibel sederhana untuk detail kartu proyek/pengalaman.
 * - Panel tetap diam (maks setinggi viewport); yang scroll hanya zona isi
 * - Judul + tombol tutup di header, tidak ikut scroll
 * - Escape / klik backdrop menutup
 * - Fokus dikunci di dalam panel (focus trap sederhana), lalu
 *   dikembalikan ke elemen pembuka saat modal ditutup
 * - Scroll halaman dikunci selama modal terbuka
 */
function Modal({ title, onClose, children }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    const opener = document.activeElement
    document.body.style.overflow = 'hidden'
    // preventScroll: tanpa ini, focus() memicu scroll-into-view yang menggulir
    // wrapper modal melewati topnya (~66px) → judul terpotong di atas layar.
    panel?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panel) return

      // Siklus fokus di dalam panel saja
      const focusable = panel.querySelectorAll('a[href], button:not([disabled])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop — hanya lapisan visual; klik di luar panel ditangani wrapper */}
      <div
        className="animate-fade-in absolute inset-0 bg-black/70"
        aria-hidden="true"
      />

      {/* Panel — panel tetap diam (max setinggi viewport), hanya ZONA ISI
          di bawahnya yang scroll. min-h-0 pada body wajib supaya konten
          panjang tidak mendorong tinggi panel melebihi max-h-full.
          Klik pada wrapper (di luar panel) menutup modal; klik di dalam
          panel dihentikan agar modal tetap terbuka. */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div
          ref={panelRef}
          tabIndex={-1}
          onClick={(event) => event.stopPropagation()}
          className="modal-panel relative flex max-h-full w-full max-w-3xl flex-col rounded-xl border border-line bg-surface shadow-2xl focus:outline-none"
        >
          {/* Header — tidak ikut scroll */}
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4 md:px-10">
            <h2 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h2>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent-hover"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Zona isi — satu-satunya elemen yang scroll */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
