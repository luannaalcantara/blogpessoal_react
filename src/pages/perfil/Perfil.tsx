import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert("Você precisa estar logado")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="
        min-h-screen
        bg-[#1A090B]
        flex
        justify-center
        items-center
        px-4
        py-10
    ">

            <div className="
            w-full
            max-w-5xl
            bg-[#260D10]
            border
            border-[#4B1B20]
            rounded-3xl
            overflow-hidden
            shadow-2xl
        ">

                {/* CAPA */}
                <div className="relative">

                    <img
                        className="
                        w-full
                        h-72
                        object-cover
                    "
                        src="https://i.imgur.com/ZZFAmzo.jpg"
                        alt="Capa do Perfil"
                    />

                    <div className="
                    absolute
                    inset-0
                    bg-[#1A090B]/50
                " />

                </div>

                {/* FOTO */}
                <div className="relative flex justify-center">

                    <img
                        className="
                        rounded-full
                        w-56
                        h-56
                        object-cover
                        mt-[-7rem]
                        border-8
                        border-[#260D10]
                        shadow-2xl
                        z-10
                    "
                        src={
                            usuario.foto
                                ? usuario.foto
                                : "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                        }
                        alt={`Foto de perfil de ${usuario.nome}`}
                    />

                </div>

                {/* INFORMAÇÕES */}
                <div className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-6
                pb-12
                pt-6
                gap-4
            ">

                    <h2 className="
                    text-4xl
                    font-bold
                    text-[#F8ECEE]
                ">
                        {usuario.nome}
                    </h2>

                    <div className="
                    w-24
                    h-1
                    bg-[#BD4251]
                    rounded-full
                " />

                    <p className="
                    text-xl
                    text-[#D78E96]
                ">
                        {usuario.usuario}
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Perfil
