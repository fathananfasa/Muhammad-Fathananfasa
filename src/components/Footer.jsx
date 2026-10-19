import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}

export default Footer
