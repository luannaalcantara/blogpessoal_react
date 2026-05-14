import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";

function ListaPostagens() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()    
    }, [postagens.length])

    async function buscarPostagens() {
        try {

            setIsLoading(true)

            await buscar('/postagens', setPostagens, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

        <div className="min-h-screen bg-[#1A090B] py-10 px-4">

        {isLoading && (
            <div className="flex justify-center w-full my-12">
                <SyncLoader
                    color="#BD4251"
                    size={18}
                />
            </div>
        )}

        <div className="flex justify-center w-full">

            <div className="w-full max-w-7xl flex flex-col">

                <h1 className="  text-5xl font-bold text-center text-[#F8ECEE] mb-12 ">
                    Postagens
                </h1>

                {(!isLoading && postagens.length === 0) && (

                    <div className="  bg-[#260D10]  border border-[#4B1B20]
                        rounded-2xl p-8 text-center ">

                        <span className=" text-2xl text-[#D78E96] ">
                            Nenhuma postagem foi encontrada!
                        </span>

                    </div>
                )}

                <div
                    className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 " >

                    {
                        postagens.map((postagem) => (
                            <CardPostagem
                                key={postagem.id}
                                postagem={postagem}
                            />
                        ))
                    }

                </div>

            </div>

        </div>

    </div>
        </>
    )
}
export default ListaPostagens;