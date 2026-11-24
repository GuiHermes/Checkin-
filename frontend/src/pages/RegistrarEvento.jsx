function RegistrarEvento() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center text-center">
      <h1 className="mb-6 text-2xl font-semibold">Cadastro de evento</h1>
      <form className="w-full space-y-4">
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Titulo do evento</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="text" name="name" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Organizador</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="text" name="organizador" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Numero de participantes</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="numeber" name="participantes" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Local</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="text" name="local" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Data</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="date" name="date" />
        </label>
        <button className="rounded bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-500" type="submit">
          Cadastrar evento
        </button>
      </form>
    </section>
  )
}

export default RegistrarEvento
