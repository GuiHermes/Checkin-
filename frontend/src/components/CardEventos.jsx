import { useEffect, useState } from "react";

export default function CardEventos() {
    const eventosTeste = [
        { "ID": 1, "Titulo": "Casamento", "NumeroDeParticipantes": 180, "OrganizadorDoEvento": "Guilherme", "LocalDoEvento": "Lavras - MG", "DataDoEvento": new Date().getFullYear() },
        { "ID": 2, "Titulo": "Festa", "NumeroDeParticipantes": 100, "OrganizadorDoEvento": "Hian", "LocalDoEvento": "Campo Belo - MG", "DataDoEvento":""},
        { "ID": 3, "Titulo": "Lançamento", "NumeroDeParticipantes": 40, "OrganizadorDoEvento": "Evelyn", "LocalDoEvento": "Lavras - MG", "DataDoEvento": new Date().getFullYear() },
        { "ID": 4, "Titulo": "Encontro", "NumeroDeParticipantes": 0, "OrganizadorDoEvento": "Matheus", "LocalDoEvento": "", "DataDoEvento": new Date().getFullYear(), "EventoAdulto": true}
    ]
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {eventosTeste.map((evento) => (
                <div className="flex flex-col gap-3 rounded-xl border border-slate-700 bg-slate-800/70 p-5 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-emerald-500/60">
                    <h1 className='border-b border-slate-700 pb-3 text-xl font-bold text-emerald-400' key={evento.ID}>{evento.Titulo}</h1>
                    {evento.NumeroDeParticipantes ? <span className="w-fit rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">Participantes: {evento.NumeroDeParticipantes}</span>:<span className="text-sm text-rose-400">Participantes: Não Informado</span>}
                    {evento.OrganizadorDoEvento ? <h2 className="text-slate-200"><span className="text-slate-400">Organizador:</span> {evento.OrganizadorDoEvento}</h2>:<span className="text-sm text-rose-400">Organizador: Não Informado</span>}
                    {evento.LocalDoEvento ? <p className="text-slate-200"><span className="text-slate-400">Local:</span> {evento.LocalDoEvento}</p>:<span className="text-sm text-rose-400">Local: Não Informado</span>}
                    {evento.DataDoEvento ? <p className="text-slate-200"><span className="text-slate-400">Data:</span> {evento.DataDoEvento}</p>:<span className="text-sm text-rose-400">Data: Não Informado</span>}
                    {evento.EventoAdulto ? <p className="mt-1 w-fit rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-sm font-semibold text-rose-300">Evento para maiores: Sim</p>:<span className="mt-1 w-fit rounded-full border border-slate-600 bg-slate-700/60 px-3 py-1 text-sm text-slate-300">Evento para maiores: Não Informado</span>}
                    
                </div>
                
            ))}
        </div>
    )
}
