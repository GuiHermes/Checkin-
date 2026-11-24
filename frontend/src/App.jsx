import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Route, Routes, Link } from 'react-router-dom'
import RegistrarEvento from './pages/RegistrarEvento.jsx'
import RegistrarParticipante from './pages/RegistrarParticipante.jsx'
import Eventos from './pages/Eventos.jsx'

function Home() {
  return (
    <section className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-slate-800/70 p-6 text-center">
      <h1 className="text-2xl font-bold text-emerald-400">Bem-vindo ao Checkin+</h1>
      <h2 className="mt-2 text-lg font-semibold text-slate-200">
        Seus eventos, organizados. Sua experiência, simplificada.
      </h2>
      <p className="mt-3 text-slate-400">
        Gerencie eventos, acompanhe participantes e facilite o processo de check-in em um só lugar.
      </p>
      <nav className="mt-5 flex flex-wrap justify-center gap-3">
        <Link className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500" to="/eventos">
          Encontrar um evento
        </Link>
        <Link className="rounded-lg border border-slate-600 px-4 py-2 text-slate-200 hover:border-emerald-500" to="/eventos/cadastro">
          Crie seu evento
        </Link>
        <Link className="rounded-lg border border-slate-600 px-4 py-2 text-slate-200 hover:border-emerald-500" to="/participantes/cadastro">
          Cadastre-se aqui
        </Link>
      </nav>
    </section>
  )
}
function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos/cadastro" element={<RegistrarEvento />} />
          <Route path="/participantes/cadastro" element={<RegistrarParticipante />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
