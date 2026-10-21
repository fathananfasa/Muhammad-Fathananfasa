/**
 * Garis bawah wavy ala goresan pena — dipakai sebagai underline dekoratif
 * di bawah teks/CSS underline link. Lebar mengikuti containernya.
 */
function HandUnderline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      width="100%"
      height="0.5em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={`block ${className}`}
    >
      <path d="M2 5 C 13 2.5, 23 6, 34 4 S 55 6.5, 66 4 S 86 2.5, 98 5" />
    </svg>
  )
}

export default HandUnderline
