import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import type Postagem from "../../../models/Postagem";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function FormPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [temas, setTemas] = useState<Tema[]>([]);

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarTemas();

        if (id !== undefined) {
            buscarPostagemPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        });
    }, [tema]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar('/postagens', postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Postagem atualizada com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar a Postagem');
                }
            }
        } else {
            try {
                await cadastrar('/postagens', postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Postagem cadastrada com sucesso');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar a Postagem');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoTema = tema.descricao === '';

    return (
     <div className="min-h-screen bg-[#1A090B] flex justify-center items-center px-4 py-10">

    <div className=" w-full max-w-3xl bg-[#260D10]  rounded-2xl  shadow-2xl border border-[#4B1B20] p-8  ">

        <h1 className=" text-4xl font-bold text-center text-[#F8ECEE] my-6  ">
            {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
        </h1>

        <form
            className="flex flex-col gap-6"
            onSubmit={gerarNovaPostagem}
        >

            {/* TÍTULO */}
            <div className="flex flex-col gap-2">

                <label
                    htmlFor="titulo"
                    className="text-[#F2D9DC] font-medium"
                >
                    Título da Postagem
                </label>

                <input
                    type="text"
                    placeholder="Título"
                    name="titulo"
                    required
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
                        focus:border-[#CA6873]
                        transition-all
                        duration-300
                    "
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                    }
                />
            </div>

            {/* TEXTO */}
            <div className="flex flex-col gap-2">

                <label
                    htmlFor="texto"
                    className="text-[#F2D9DC] font-medium"
                >
                    Texto da Postagem
                </label>

                <input
                    type="text"
                    placeholder="Texto"
                    name="texto"
                    required
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
                        focus:border-[#CA6873]
                        transition-all
                        duration-300
                    "
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                    }
                />
            </div>

            {/* SELECT */}
            <div className="flex flex-col gap-2">

                <p className="text-[#F2D9DC] font-medium">
                    Tema da Postagem
                </p>

                <select
                    name="tema"
                    id="tema"
                    className="
                        bg-[#1A090B]
                        border
                        border-[#712830]
                        rounded-xl
                        p-3
                        text-[#F8ECEE]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#CA6873]
                        focus:border-[#CA6873]
                        transition-all
                        duration-300
                    "
                    onChange={(e) =>
                        buscarTemaPorId(e.currentTarget.value)
                    }
                >

                    <option
                        value=""
                        disabled
                        selected
                        className="bg-[#260D10]"
                    >
                        Selecione um Tema
                    </option>

                    {temas.map((tema) => (
                        <option
                            key={tema.id}
                            value={tema.id}
                            className="bg-[#260D10]"
                        >
                            {tema.descricao}
                        </option>
                    ))}

                </select>
            </div>

            {/* BOTÃO */}
            <button
                type='submit'
                className='
                    rounded-xl
                    bg-[#BD4251]
                    hover:bg-[#973540]
                    disabled:bg-[#4B1B20]
                    text-[#F8ECEE]
                    font-bold
                    py-3
                    flex
                    justify-center
                    items-center
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-[#BD4251]/20
                    hover:scale-[1.02]
                '
                disabled={carregandoTema}
            >

                {isLoading ?

                    <ClipLoader
                        color="#F8ECEE"
                        size={24}
                    />

                    :

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

export default FormPostagem;