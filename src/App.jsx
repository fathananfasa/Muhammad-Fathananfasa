import Navbar from './components/Navbar'
import SoftAurora from './components/SoftAurora'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-atmosphere bg-base font-sans text-ink antialiased">
      {/* Aurora — layer paling belakang, band cahaya di area atas laman */}
      <div className="absolute inset-0" aria-hidden="true">
        <SoftAurora
          color1="#166534"
          color2="#0f766e"
          spectrum={0}
          speed={0.3}
          brightness={0.9}
          bandHeight={0.75}
          bandSpread={0.8}
          scale={1.5}
          enableMouseInteraction={false}
          clickPulse={false}
        />
      </div>

      {/* Orb dekoratif — murni visual, sembunyikan dari screen reader */}
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      {/* Konten dibungkus relative supaya selalu di atas orb */}
      <div className="relative">
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
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
