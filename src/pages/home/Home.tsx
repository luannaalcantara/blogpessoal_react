import ilustracao_css from "../../assets/minha-ilustracao.png";
import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="
            min-h-screen
            bg-gradient-to-br
            from-[#1A090B]
            via-[#260D10]
            to-[#4B1B20]
            flex
            justify-center
            items-center
            px-6
        ">

                <div className='
                container
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-10
                text-white
                items-center
                py-16
            '>

                    {/* TEXOS */}
                    <div className="
                    flex
                    flex-col
                    gap-6
                    items-center
                    lg:items-start
                    justify-center
                    text-center
                    lg:text-left
                ">

                        <h2 className="
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-[#F8ECEE]
                        leading-tight
                    ">
                            Seja Bem Vinde!
                        </h2>

                        <p className='
                        text-xl
                        text-[#D78E96]
                        max-w-xl
                        leading-relaxed
                    '>
                            Expresse aqui seus pensamentos, opiniões
                            e compartilhe suas ideias com o mundo.
                        </p>

                        <div className="
                        flex
                        justify-center
                        lg:justify-start
                        gap-4
                        mt-2
                    ">

                            <ModalPostagem />

                        </div>

                    </div>

                    {/* IMAGEM */}
                    <div className="flex justify-center">

                        <img
                            src={ilustracao_css}
                            alt="Ilustração do blog"
                            className='
                            w-80
                            lg:w-[32rem]
                            mx-auto
                            hover:scale-105
                            transition-all
                            duration-500
                            drop-shadow-[0_0_30px_rgba(189,66,81,0.25)]
                        '
                        />

                    </div>

                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home