import { useState } from 'react'
import { profile } from '../data/profile'

const navLinks = [
  { href: '#about', label: 'Tentang' },
  { href: '#projects', label: 'Proyek' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#skills', label: 'Skill' },
  { href: '#contact', label: 'Kontak' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur-md">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="font-display text-sm font-medium tracking-tight transition-colors hover:text-accent-hover"
        >
          {profile.name}
        </a>

        {/* Link anchor — desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol menu — mobile (dua garis, murni CSS) */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Panel menu — mobile */}
      {menuOpen && (
        <ul className="border-t border-line px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-base text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
