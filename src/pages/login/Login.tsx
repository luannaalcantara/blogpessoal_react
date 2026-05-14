import { useContext, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
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

                {/* FORMULÁRIO */}
                <div className="
                flex
                justify-center
                items-center
                px-6
                py-10
            ">

                    <form
                        onSubmit={handleSubmit}
                        className="
                        w-full
                        max-w-md
                        bg-[#260D10]
                        border
                        border-[#4B1B20]
                        rounded-2xl
                        shadow-2xl
                        p-8
                        flex
                        flex-col
                        gap-5
                    "
                    >

                        <h2 className="
                        text-[#F8ECEE]
                        text-5xl
                        font-bold
                        text-center
                        mb-4
                    ">
                            Entrar
                        </h2>

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
                                value={usuarioLogin.usuario}
                                onChange={atualizarEstado}
                                placeholder="Usuário"
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
                                value={usuarioLogin.senha}
                                onChange={atualizarEstado}
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
                            />

                        </div>

                        {/* BOTÃO */}
                        <button
                            type='submit'
                            className="
                            rounded-xl
                            bg-[#BD4251]
                            hover:bg-[#973540]
                            text-[#F8ECEE]
                            font-bold
                            py-3
                            transition-all
                            duration-300
                            shadow-lg
                            shadow-[#BD4251]/20
                            hover:scale-[1.02]
                        "
                        >
                            <span>Entrar</span>
                        </button>

                        <hr className="border-[#4B1B20] w-full my-2" />

                        <p className="
                        text-[#D78E96]
                        text-center
                    ">
                            Ainda não tem uma conta?{' '}

                            <Link
                                to="/cadastro"
                                className="
                                text-[#CA6873]
                                font-semibold
                                hover:text-[#F8ECEE]
                                hover:underline
                                transition-all
                                duration-300
                            "
                            >
                                Cadastre-se
                            </Link>

                        </p>

                    </form>
                </div>

                {/* IMAGEM */}
                <div
                    className="
                    hidden
                    lg:block
                    bg-[url('https://i.imgur.com/ZZFAmzo.jpg')]
                    bg-no-repeat
                    bg-cover
                    bg-center
                    relative
                "
                >

                    <div className="
                    absolute
                    inset-0
                    bg-[#1A090B]/60
                    backdrop-blur-[2px]
                " />

                </div>

            </div>
        </>
    );
}

export default Login;