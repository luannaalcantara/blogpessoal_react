import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}
function CardPostagem({ postagem }: CardPostagensProps) {

    return (

        <div className='border border-zinc-700 bg-zinc-900
        flex flex-col rounded-2xl overflow-hidden justify-between
        shadow-lg shadow-orange-500/10 hover:scale-[1.01]
        transition duration-300'>

            <div>

                {/* HEADER */}
                <div className="flex w-full bg-orange-500 py-3 px-4 items-center gap-4">

                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 w-12 rounded-full object-cover border-2 border-white'
                        alt={postagem.usuario?.nome}
                    />

                    <h3 className='text-lg font-bold text-white uppercase'>
                        {postagem.usuario?.nome}
                    </h3>

                </div>

                {/* CONTEÚDO */}
                <div className='p-5 bg-zinc-950 flex flex-col gap-3'>

                    <h4 className='text-2xl font-bold text-orange-400 uppercase'>
                        {postagem.titulo}
                    </h4>

                    <p className='text-zinc-300'>
                        {postagem.texto}
                    </p>

                    <div className="flex flex-col gap-1 text-sm text-zinc-400">

                        <p>
                            <span className="text-orange-400 font-semibold">
                                Tema:
                            </span>{' '}
                            {postagem.tema?.descricao}
                        </p>

                        <p>
                            <span className="text-orange-400 font-semibold">
                                Data:
                            </span>{' '}
                            {new Intl.DateTimeFormat("pt-BR", {
                                dateStyle: 'full',
                                timeStyle: 'medium',
                            }).format(new Date(postagem.data))}
                        </p>

                    </div>
                </div>
            </div>

            {/* BOTÕES */}
            <div className="flex">

                <Link
                    to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-white bg-zinc-700 
                    hover:bg-orange-500 flex items-center 
                    justify-center py-3 transition duration-300'
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-red-500 
                    hover:bg-red-600 w-full flex 
                    items-center justify-center transition duration-300'
                >
                    <button>Deletar</button>
                </Link>

            </div>
        </div>
    )
}

export default CardPostagem