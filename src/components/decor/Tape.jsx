/**
 * Overlay "selotip" untuk sudut foto yang ditempel di halaman.
 * Bentuk & warna dari class .tape di index.css; rotasi per instance.
 */
function Tape({ className = '' }) {
  return <span aria-hidden="true" className={`tape ${className}`} />
}

export default Tape
