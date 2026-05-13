import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }


   return (
    <div className='min-h-screen bg-zinc-950 flex items-center justify-center px-4'>

        <div className='w-full max-w-xl bg-zinc-900 rounded-2xl shadow-lg shadow-orange-500/10 overflow-hidden'>

            <h1 className='text-4xl text-center font-bold text-orange-400 my-6'>
                Deletar tema
            </h1>

            <p className='text-center text-zinc-300 font-medium mb-6 px-4'>
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>

            <div className='border border-zinc-700 flex flex-col rounded-2xl overflow-hidden'>

                <header
                    className='py-3 px-6 bg-orange-500 text-white font-bold text-2xl'
                >
                    Tema
                </header>

                <p className='p-8 text-2xl text-white bg-zinc-950 h-full'>
                    {tema.descricao}
                </p>

                <div className="flex">

                    <button
                        className='text-white bg-zinc-700 hover:bg-zinc-600 w-full py-3 transition duration-300'
                        onClick={retornar}
                    >
                        Não
                    </button>

                    <button
                        className='w-full text-white bg-red-500 hover:bg-red-600 
                        flex items-center justify-center transition duration-300'
                        onClick={deletarTema}
                    >

                        {isLoading ?

                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />

                            :

                            <span>Sim</span>
                        }

                    </button>

                </div>
            </div>
        </div>
    </div>
)
}

export default DeletarTema