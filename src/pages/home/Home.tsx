import ilustracao_css from "../../assets/minha-ilustracao.png";
import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
           <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-800 flex justify-center">
            <div className="bg-zinc-950 flex justify-center"></div>
            <h2 className="text-5xl font-bold text-orange-400"></h2>
                <div className='container grid grid-cols-2 text-white'>

                    <div className="flex flex-col gap-4 items-center justify-center py-4">

                        <h2 className="text-5xl font-bold text-orange-400">
                            Seja Bem Vinde!
                        </h2>

                        <p className='text-xl text-zinc-300'>
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div className="flex justify-around gap-4">
                           
                           <ModalPostagem />

                            
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <img
                            src={ilustracao_css}
                            alt="Ilustração do blog"
                            className='w-96 mx-auto hover:scale-105 transition duration-300'
                        />
                    </div>
                </div>
            </div>

             <ListaPostagens />
        </>
    )
}

export default Home