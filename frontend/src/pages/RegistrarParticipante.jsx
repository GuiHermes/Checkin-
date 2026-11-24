function RegistrarParticipante() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center text-center">
      <h1 className="mb-6 text-2xl font-semibold">Cadastro de participante</h1>
      <form className="w-full space-y-4">
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Nome</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="text" name="nome" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">E-mail</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="email" name="email" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Idade</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="number" name="idade" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-300">Senha</span>
          <input className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-white" type="password" name="senha" />
        </label>
        <button className="rounded bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-500 cursor-pointer" type="submit">
          Cadastrar participante
        </button>
      </form>
    </section>
  )
}

export default RegistrarParticipante
