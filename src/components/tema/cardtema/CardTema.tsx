import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}


function CardTema({ tema }: CardTemaProps) {
  return (
    <div className='
    border
    border-[#4B1B20]
    bg-[#260D10]
    flex
    flex-col
    rounded-2xl
    overflow-hidden
    justify-between
    shadow-2xl
    hover:scale-[1.02]
    hover:shadow-[#BD4251]/20
    transition-all
    duration-300
  '>

      {/* HEADER */}
      <header className='
      py-3
      px-6
      bg-[#BD4251]
      text-[#F8ECEE]
      font-bold
      text-2xl
    '>
        Tema
      </header>

      {/* CONTEÚDO */}
      <div className='
      bg-[#1A090B]
      flex
      items-center
      justify-center
      p-8
      min-h-[180px]
    '>

        <p className='
        text-2xl
        text-[#F8ECEE]
        text-center
        font-semibold
        break-words
      '>
          {tema.descricao}
        </p>

      </div>

      {/* BOTÕES */}
      <div className="flex">

        <Link
          to={`/editartema/${tema.id}`}
          className='
          w-full
          text-[#F8ECEE]
          bg-[#4B1B20]
          hover:bg-[#712830]
          flex
          items-center
          justify-center
          py-3
          transition-all
          duration-300
        '
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletartema/${tema.id}`}
          className='
          text-[#F8ECEE]
          bg-[#BD4251]
          hover:bg-[#973540]
          w-full
          flex
          items-center
          justify-center
          transition-all
          duration-300
        '
        >
          <button>Deletar</button>
        </Link>

      </div>

    </div>
  )
}

export default CardTema