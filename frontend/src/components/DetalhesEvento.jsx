import { Link, useParams } from 'react-router-dom'
import { eventosTeste } from './CardEventos'

function Informacao({ titulo, valor }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-2">
      <dt className="text-sm text-slate-400">{titulo}</dt>
      <dd className="mt-1 font-medium text-slate-100">{valor || 'Não informado'}</dd>
    </div>
  )
}

export default function DetalhesEventos() {
  const { id } = useParams()
  const evento = eventosTeste.find((item) => item.id === Number(id))

  if (!evento) {
    return (
      <section className="mx-auto max-w-xl rounded-xl border border-slate-700 bg-slate-800/70 p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-100">Evento não encontrado</h1>
        <Link to="/eventos" className="mt-5 inline-block rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700">
          Voltar para eventos
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl">
      <Link to="/eventos" className="text-sm text-slate-300 transition hover:text-emerald-400">Voltar para eventos</Link>

      <article className="mt-3 rounded-xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg shadow-black/20 sm:p-8">
        <div className="flex flex-col text-center">
          <p className="text-sm font-medium text-emerald-400">Detalhes do evento</p>
          <h1 className="mt-2 text-3xl font-bold text-white mb-2">{evento.Titulo}</h1>
          {evento.EventoAdulto && (
            <span className="mt-2 mx-auto rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-sm text-rose-300">
              Evento para maiores de 18 anos
            </span>
          )}
        </div>

        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          <Informacao titulo="Organizador" valor={evento.OrganizadorDoEvento} />
          <Informacao titulo="Local" valor={evento.LocalDoEvento} />
          <Informacao titulo="Data" valor={evento.DataDoEvento} />
          <Informacao titulo="Número de participantes" valor={evento.NumeroDeParticipantes || 'Não informado'} />
        </dl>

        <div className=" mt-3 flex flex-col gap-3 border-t border-slate-700 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">Confira os dados antes de participar.</p>
          <Link to="/participantes/cadastro" className="rounded-xl bg-emerald-500 text-center font-bold text-white transition hover:bg-emerald-900 mx-auto p-2">
            Participar
          </Link>
        </div>
      </article>
    </section>
  )
}
