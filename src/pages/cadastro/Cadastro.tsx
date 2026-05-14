import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { ClipLoader } from "react-spinners"

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      } catch (error) {
        alert('Erro ao cadastrar o usuário!')
      }
    } else {
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="
      grid
      grid-cols-1
      lg:grid-cols-2
      min-h-screen
      bg-[#1A090B]
    ">

        {/* IMAGEM */}
        <div className=" hidden lg:block  bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-no-repeat bg-cover bg-center relative " >

          <div className="absolute inset-0 bg-[#1A090B]/60 backdrop-blur-[2px] " />

        </div>

        {/* FORMULÁRIO */}
        <div className="flex justify-center items-center px-6  py-10">

          <form className=' w-full max-w-xl bg-[#260D10] border border-[#4B1B20] rounded-2xl shadow-2xl p-8 flex
            flex-col gap-5'
            onSubmit={cadastrarNovoUsuario}>

            <h2 className='text-[#F8ECEE] text-5xl font-bold text-center mb-4'>
              Cadastrar
            </h2>

            {/* NOME */}
            <div className="flex flex-col gap-2 w-full">

              <label
                htmlFor="nome"
                className="text-[#F2D9DC]"
              >
                Nome
              </label>

              <input type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className=" bg-[#1A090B] border border-[#712830] rounded-xl p-3
                text-[#F8ECEE] placeholder:text-[#D78E96] focus:outline-none focus:ring-2
                focus:ring-[#CA6873] transition-all  duration-300"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />

            </div>

            {/* USUÁRIO */}
            <div className="flex flex-col gap-2 w-full">

              <label
                htmlFor="usuario"
                className="text-[#F2D9DC]"
              >
                Usuário
              </label>

              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="bg-[#1A090B] border border-[#712830] rounded-xl p-3 text-[#F8ECEE] placeholder:text-[#D78E96]
                focus:outline-none focus:ring-2 focus:ring-[#CA6873]
                transition-all duration-300"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />

            </div>

            {/* FOTO */}
            <div className="flex flex-col gap-2 w-full">

              <label
                htmlFor="foto"
                className="text-[#F2D9DC]"
              >
                Foto
              </label>

              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="URL da foto"
                className="
                bg-[#1A090B]
                border
                border-[#712830]
                rounded-xl
                p-3
                text-[#F8ECEE]
                placeholder:text-[#D78E96]
                focus:outline-none
                focus:ring-2
                focus:ring-[#CA6873]
                transition-all
                duration-300
              "
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />

            </div>

            {/* SENHA */}
            <div className="flex flex-col gap-2 w-full">

              <label
                htmlFor="senha"
                className="text-[#F2D9DC]"
              >
                Senha
              </label>

              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="
                bg-[#1A090B]
                border
                border-[#712830]
                rounded-xl
                p-3
                text-[#F8ECEE]
                placeholder:text-[#D78E96]
                focus:outline-none
                focus:ring-2
                focus:ring-[#CA6873]
                transition-all
                duration-300
              "
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />

            </div>

            {/* CONFIRMAR SENHA */}
            <div className="flex flex-col gap-2 w-full">

              <label
                htmlFor="confirmarSenha"
                className="text-[#F2D9DC]"
              >
                Confirmar Senha
              </label>

              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="bg-[#1A090B] border border-[#712830] rounded-xl p-3 text-[#F8ECEE] placeholder:text-[#D78E96]
                focus:outline-none focus:ring-2
                focus:ring-[#CA6873] transition-all duration-300 "
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />

            </div>

            {/* BOTÕES */}
            <div className="
            flex
            justify-around
            w-full
            gap-6
            mt-4
          ">

              <button
                type='reset'
                className='
                rounded-xl
                text-[#F8ECEE]
                bg-[#4B1B20]
                hover:bg-[#712830]
                w-1/2
                py-3
                transition-all
                duration-300
              '
                onClick={retornar}
              >
                Cancelar
              </button>

              <button
                type='submit'
                className='
                rounded-xl
                text-[#F8ECEE]
                bg-[#BD4251]
                hover:bg-[#973540]
                w-1/2
                py-3
                flex
                justify-center
                items-center
                transition-all
                duration-300
                shadow-lg
                shadow-[#BD4251]/20
              '
              >

                {isLoading ?

                  <ClipLoader
                    color="#F8ECEE"
                    size={24}
                  />

                  :

                  <span>Cadastrar</span>
                }

              </button>

            </div>

          </form>
        </div>
      </div>
    </>
  )


}

export default Cadastro