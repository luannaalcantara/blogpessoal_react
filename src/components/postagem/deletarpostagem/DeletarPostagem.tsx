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
        <div className='min-h-screen bg-[#1A090B] flex items-center justify-center px-4'>

            <div className='
        w-full
        max-w-2xl
        bg-[#260D10]
        rounded-2xl
        shadow-2xl
        border
        border-[#4B1B20]
        overflow-hidden
    '>

                <h1 className='
            text-4xl
            text-center
            font-bold
            text-[#F8ECEE]
            my-6
        '>
                    Deletar Postagem
                </h1>

                <p className='
            text-center
            text-[#D78E96]
            font-medium
            mb-6
            px-6
        '>
                    Você tem certeza de que deseja apagar a postagem a seguir?
                </p>

                <div className='
            border
            border-[#4B1B20]
            flex
            flex-col
            rounded-2xl
            overflow-hidden
            mx-6
            mb-6
        '>

                    <header
                        className='
                    py-3
                    px-6
                    bg-[#BD4251]
                    text-[#F8ECEE]
                    font-bold
                    text-2xl
                '
                    >
                        Postagem
                    </header>

                    <div className="p-6 bg-[#1A090B]">

                        <p className='
                    text-2xl
                    text-[#F8ECEE]
                    font-semibold
                    mb-3
                '>
                            {postagem.titulo}
                        </p>

                        <p className='text-[#D78E96] leading-relaxed'>
                            {postagem.texto}
                        </p>

                    </div>

                    <div className="flex">

                        <button
                            className='
                        text-[#F8ECEE]
                        bg-[#4B1B20]
                        hover:bg-[#712830]
                        w-full
                        py-3
                        transition-all
                        duration-300
                    '
                            onClick={retornar}
                        >
                            Não
                        </button>

                        <button
                            className='
                        w-full
                        text-[#F8ECEE]
                        bg-[#BD4251]
                        hover:bg-[#973540]
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                    '
                            onClick={deletarPostagem}
                        >

                            {isLoading ?

                                <ClipLoader
                                    color="#F8ECEE"
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

export default DeletarPostagem