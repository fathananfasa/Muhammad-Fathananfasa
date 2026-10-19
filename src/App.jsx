import Navbar from './components/Navbar'
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
