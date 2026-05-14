import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import type Tema from "../../../models/Tema";
import { ClipLoader } from "react-spinners";

function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id, token])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar('/temas', tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o tema.')
                }
            }
        } else {
            try {
                await cadastrar('/temas', tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar o tema.')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1A090B] px-4">

            <div className=" w-full max-w-2xl bg-[#260D10] border border-[#4B1B20] rounded-2xl shadow-2xl p-8
        ">

                <h1 className=" text-4xl font-bold text-center text-[#F8ECEE] mb-8
            ">
                    {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                </h1>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={gerarNovoTema}
                >

                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="descricao"
                            className="text-[#F2D9DC] font-medium"
                        >
                            Descrição do Tema
                        </label>

                        <input
                            type="text" placeholder="Descreva aqui seu tema..." name="descricao" className=" bg-[#1A090B] border
                            border-[#712830] rounded-xl p-3 text-[#F8ECEE] placeholder:text-[#D78E96] focus:outline-none
                            focus:ring-2 focus:ring-[#CA6873] focus:border-[#CA6873] transition-all duration-300 "
                            value={tema.descricao || ''}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />

                    </div>

                    <button
                        className=" bg-[#BD4251]  hover:bg-[#973540] text-[#F8ECEE]  font-semibold rounded-xl py-3 w-1/2
                        mx-auto flex justify-center items-center transition-all duration-300  hover:scale-105 "
                        type="submit"  >
                        {isLoading ? (
                            <ClipLoader
                                color='#F8ECEE'
                                size={24}
                            />
                        ) : (
                            <span>
                                {id === undefined ? 'Cadastrar' : 'Atualizar'}
                            </span>
                        )}
                    </button>

                </form>
            </div>
        </div>
    );
}


export default FormTema;