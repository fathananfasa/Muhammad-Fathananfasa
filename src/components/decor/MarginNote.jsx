/**
 * Catatan margin: teks kecil Fraunces italic yang "menggantung" di garis
 * margin vertikal. Rotasi default −2° biar terasa ditulis tangan; set
 * rotate={0} kalau harus lurus.
 */
function MarginNote({ rotate = -2, className = '', children }) {
  return (
    <span
      className={`margin-note inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}

export default MarginNote
