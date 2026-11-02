import Navbar from './components/Navbar'
import SoftAurora from './components/SoftAurora'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-atmosphere bg-base font-sans text-ink antialiased">
      {/* Atmosfer: SoftAurora (fixed, di belakang konten) + glow radial
          statis via .bg-atmosphere. Konten bergulir di atasnya. */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <SoftAurora
          color1="#166534"
          color2="#0f766e"
          spectrum={0}
          speed={0.3}
          brightness={0.7}
          bandHeight={0.65}
          tilt={-4}
          bandSpread={0.7}
          scale={1.5}
          enableMouseInteraction={false}
          clickPulse={false}
        />
      </div>

      <div className="relative pt-14">
        {/* Skip link — muncul saat mendapat fokus keyboard */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
        >
          Langsung ke konten
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
