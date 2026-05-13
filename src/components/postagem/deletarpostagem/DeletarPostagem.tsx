import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
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

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Postagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                alert('Erro ao deletar a postagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (
        <div className='min-h-screen bg-zinc-950 flex items-center justify-center px-4'>

            <div className='w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-lg shadow-orange-500/10 overflow-hidden'>

                <h1 className='text-4xl text-center font-bold text-orange-400 my-6'>
                    Deletar Postagem
                </h1>

                <p className='text-center text-zinc-300 font-medium mb-6 px-4'>
                    Você tem certeza de que deseja apagar a postagem a seguir?
                </p>

                <div className='border border-zinc-700 flex flex-col rounded-2xl overflow-hidden'>

                    <header
                        className='py-3 px-6 bg-orange-500 text-white font-bold text-2xl'
                    >
                        Postagem
                    </header>

                    <div className="p-6 bg-zinc-950">

                        <p className='text-2xl text-white font-semibold mb-3'>
                            {postagem.titulo}
                        </p>

                        <p className='text-zinc-300'>
                            {postagem.texto}
                        </p>

                    </div>

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
                            onClick={deletarPostagem}
                        >

                            {isLoading ?

                                <ClipLoader
                                    color="#ffffff"
                                    size={24}
                                /> :

                                <span>Sim</span>
                            }

                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem