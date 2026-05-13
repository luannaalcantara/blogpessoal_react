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
        <div className="min-h-screen bg-zinc-950 flex justify-center items-center px-4">

            <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-lg shadow-orange-500/10 p-8">

                <h1 className="text-4xl text-center font-bold text-orange-400 my-6">
                    {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                </h1>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={gerarNovoTema}
                >

                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="descricao"
                            className="text-zinc-300"
                        >
                            Descrição do Tema
                        </label>

                        <input
                            type="text"
                            placeholder="Descreva aqui seu tema"
                            name='descricao'
                            className="bg-zinc-950 border border-zinc-700 rounded-lg p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            value={tema.descricao || ''}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <button
                        className="rounded-lg text-white bg-orange-500 hover:bg-orange-600 py-3 flex justify-center transition duration-300 shadow-lg shadow-orange-500/30 font-semibold"
                        type="submit"
                    >
                        {isLoading ?

                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :

                            <span>
                                {id === undefined ? 'Cadastrar' : 'Atualizar'}
                            </span>
                        }
                    </button>

                </form>
            </div>
        </div>
    );
}


export default FormTema;