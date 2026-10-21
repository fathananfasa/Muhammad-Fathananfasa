/**
 * Panah sketsa: digambar tangan (garis agak berbelok, ujung terbuka).
 * Warna via currentColor — atur dari className (text-accent, text-muted, dst).
 */
function HandArrow({ direction = 'down', className = '' }) {
  return direction === 'down' ? (
    <svg
      viewBox="0 0 24 32"
      width="20"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M13 2 C 10 9, 15 17, 11.5 27" />
      <path d="M5 21.5 L 11.5 27 L 17.5 22" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 32 24"
      width="27"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 13 C 11 10, 20 15, 29 11.5" />
      <path d="M23.5 5.5 L 29 11.5 L 22.5 17" />
    </svg>
  )
}

export default HandArrow
