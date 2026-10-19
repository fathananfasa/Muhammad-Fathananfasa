import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/**
 * Modal aksesibel sederhana untuk detail kartu proyek/pengalaman.
 * - Escape / klik backdrop menutup
 * - Fokus dikunci di dalam panel (focus trap sederhana), lalu
 *   dikembalikan ke elemen pembuka saat modal ditutup
 * - Scroll body dikunci selama modal terbuka
 */
function Modal({ title, onClose, children }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    const opener = document.activeElement
    document.body.style.overflow = 'hidden'
    panel?.focus()

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
      {/* Backdrop — klik di luarnya menutup */}
      <div
        className="animate-fade-in absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Panel — max lebar + scroll internal di layar kecil */}
      <div className="absolute inset-0 flex items-start justify-center overflow-y-auto p-4 md:p-8">
        <div
          ref={panelRef}
          tabIndex={-1}
          className="modal-panel relative mt-8 w-full max-w-3xl rounded-xl border border-line bg-surface p-6 shadow-2xl focus:outline-none md:mt-16 md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="absolute right-4 top-4 rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent-hover"
          >
            <X size={16} aria-hidden="true" />
          </button>

          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
