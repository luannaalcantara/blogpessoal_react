function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-zinc-950 text-white place-items-center">

        {/* LADO DA IMAGEM */}
        <div 
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
          w-full min-h-screen bg-cover bg-center"
        />

        {/* FORMULÁRIO */}
        <form className='flex justify-center items-center flex-col w-2/3 gap-4' >
          
          <h2 className='text-5xl font-bold text-orange-400'>
            Cadastrar
          </h2>

          {/* INPUTS */}
          {/** padrão reutilizado 👇 */}
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-zinc-300">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-zinc-300">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-zinc-300">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="URL da foto"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-zinc-300">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-zinc-300">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* BOTÕES */}
          <div className="flex justify-around w-full gap-4 mt-4">

            <button
              type='reset'
              className='rounded bg-zinc-700 hover:bg-zinc-600 w-1/2 py-2 transition'
            >
              Cancelar
            </button>

            <button
              type='submit'
              className='rounded bg-orange-500 hover:bg-orange-600 w-1/2 py-2 transition shadow-lg shadow-orange-500/30'
            >
              Cadastrar
            </button>

          </div>

        </form>
      </div>
    </>
  )
}

export default Cadastro