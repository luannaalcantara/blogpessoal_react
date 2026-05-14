import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}
function CardPostagem({ postagem }: CardPostagensProps) {

    return (

        <div className='  border border-[#4B1B20] bg-[#260D10] flex flex-col rounded-2xl overflow-hidden justify-between
    shadow-2xl hover:scale-[1.02] hover:shadow-[#BD4251]/20 transition-all duration-300'>

            <div>

                {/* HEADER */}
                <div className="  flex w-full bg-[#BD4251] py-3 px-4 items-center gap-4  ">

                    <img
                        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                        className=' h-12 w-12 rounded-full object-cover border-2 border-[#F8ECEE] '
                        alt={postagem.usuario?.nome} />

                    <h3 className='text-lg font-bold text-[#F8ECEE] uppercase '>
                        {postagem.usuario?.nome}
                    </h3>

                </div>

                {/* CONTEÚDO */}
                <div className=' p-5 bg-[#1A090B] flex  flex-col gap-4'>

                    <h4 className=' text-2xl  font-bold text-[#CA6873] uppercase'>
                        {postagem.titulo}
                    </h4>

                    <p className='  text-[#F2D9DC] leading-relaxed'>
                        {postagem.texto}
                    </p>

                    <div className="flex  flex-col gap-2 text-sm text-[#D78E96] border-t border-[#4B1B20] pt-4 ">

                        <p>
                            <span className=" text-[#CA6873] font-semibold ">
                                Tema:
                            </span>{' '}
                            {postagem.tema?.descricao}
                        </p>

                        <p>
                            <span className=" text-[#CA6873] font-semibold ">
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
                    className='  w-full text-[#F8ECEE] bg-[#4B1B20] hover:bg-[#712830] flex items-center justify-center py-3 transition-all
                    duration-300'>
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarpostagem/${postagem.id}`}
                    className=' text-[#F8ECEE] bg-[#BD4251]hover:bg-[#973540] w-full flex items-center justify-center transition-all
                duration-300'>
                    <button>Deletar</button>
                </Link>

            </div>
        </div>
    )
}

export default CardPostagem