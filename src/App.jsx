import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
  Shell "Buku Kerja": background datar, strip punggung buku + garis margin
  vertikal permanen (desktop saja). Konten bergulir di atasnya.
*/
function App() {
  return (
    <div className="min-h-screen bg-base font-sans text-ink antialiased">
      {/* Strip punggung buku di tepi kiri viewport — murni dekoratif */}
      <div
        aria-hidden="true"
        className="book-spine pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-2.5 bg-surface md:block"
      />

      {/* Garis margin vertikal — tempat MarginNote "menggantung" */}
      <div
        aria-hidden="true"
        className="notebook-margin pointer-events-none fixed bottom-0 left-10 top-0 z-40 hidden md:block"
      />

      {/* Skip link — muncul saat mendapat fokus keyboard */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Langsung ke konten
      </a>

      <div className="relative pt-14">
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
