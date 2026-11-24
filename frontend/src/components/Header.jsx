import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="relative flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="p-1">
        <Link to="/" className="text-xl font-semibold hover:text-emerald-500 hover:duration-250 ease text-white">
          Checkin
        </Link>
        <span className="font-bold text-2xl text-emerald-500 border-b">+</span>
      </div>

      <button
        type="button"
        className="rounded p-2 text-slate-200 hover:bg-slate-800 cursor-pointer md:hidden"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="header-navigation"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span className="text-2xl leading-none" aria-hidden="true">{menuAberto ? '×' : '☰'}</span>
      </button>
      <nav
        id="header-navigation"
        className={`${menuAberto ? 'block' : 'hidden'} absolute left-0 top-full z-10 w-full border-b border-slate-800 bg-slate-950 px-6 py-3 md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0`}
      >
        <ul className="flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:items-center md:gap-4">
          <li><Link onClick={() => setMenuAberto(false)} className="hover:text-white" to="/eventos">Eventos</Link></li>
          <li><Link onClick={() => setMenuAberto(false)} className="hover:text-white" to="/eventos/cadastro">Cadastrar evento</Link></li>
          <li><Link onClick={() => setMenuAberto(false)} className="hover:text-white" to="/participantes/cadastro">Cadastrar participante</Link></li>
        </ul>
      </nav>
    </header>
  )
}


