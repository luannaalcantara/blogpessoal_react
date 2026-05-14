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
        <div className='min-h-screen bg-[#1A090B] flex items-center justify-center px-4'>

            <div className='  w-full  max-w-xl bg-[#260D10] rounded-2xl  shadow-2xl border border-[#4B1B20] overflow-hidden'>

                <h1 className='text-4xl text-center font-bold text-[#F8ECEE]  my-6 '>
                    Deletar Tema
                </h1>

                <p className=' text-center text-[#D78E96] font-medium mb-6 px-6 '>
                    Você tem certeza de que deseja apagar o tema a seguir?
                </p>

                <div className='  border  border-[#4B1B20] flex flex-col rounded-2xl overflow-hidden mx-6  mb-6 '>

                    <header
                        className='py-3 px-6 bg-[#BD4251] text-[#F8ECEE]  font-bold text-2xl' >
                        Tema
                    </header>

                    <p className='p-8 text-2xl text-[#F8ECEE] bg-[#1A090B] h-full'>
                        {tema.descricao}
                    </p>

                    <div className="flex">

                        <button  className=' text-[#F8ECEE] bg-[#4B1B20] hover:bg-[#712830] w-full
                        py-3  transition-all  duration-300'
                            onClick={retornar}  >
                            Não
                        </button>

                        <button
                            className='  w-full  text-[#F8ECEE] bg-[#BD4251] hover:bg-[#973540] flex items-center justify-center
                        transition-all duration-300'
                            onClick={deletarTema} >

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

export default DeletarTema