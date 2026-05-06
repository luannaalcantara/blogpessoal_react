import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-zinc-950 text-white place-items-center">

        {/* FORM */}
        <form className="flex justify-center items-center flex-col w-2/3 gap-4">
          
          <h2 className="text-5xl font-bold text-orange-400">
            Entrar
          </h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-zinc-300">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-zinc-300">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="bg-zinc-900 border border-zinc-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type='submit'
            className="rounded bg-orange-500 hover:bg-orange-600 text-white w-1/2 py-2 transition shadow-lg shadow-orange-500/30"
          >
            Entrar
          </button>

          <hr className="border-zinc-700 w-full" />

          <p className="text-zinc-400">
            Ainda não tem uma conta?{' '}
            <Link 
              to="/cadastro" 
              className="text-orange-400 hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </form>

        {/* IMAGEM */}
        <div 
          className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat
          w-full min-h-screen bg-cover bg-center"
        />
      </div>
    </>
  );
}

export default Login;