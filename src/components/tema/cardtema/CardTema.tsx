import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}


function CardTema({ tema }: CardTemaProps) {
  return (
    <div className='border border-zinc-700 bg-zinc-900 flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg shadow-orange-500/10 hover:scale-[1.02] transition duration-300'>

      <header className='py-3 px-6 bg-orange-500 text-white font-bold text-2xl'>
        Tema
      </header>

      <p className='p-8 text-2xl text-white bg-zinc-950 h-full'>
        {tema.descricao}
      </p>

      <div className="flex">

        <Link
          to={`/editartema/${tema.id}`}
          className='w-full text-white bg-zinc-700 hover:bg-orange-500
        flex items-center justify-center py-3 transition duration-300'
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletartema/${tema.id}`}
          className='text-white bg-red-500 hover:bg-red-600 w-full
        flex items-center justify-center transition duration-300'
        >
          <button>Deletar</button>
        </Link>

      </div>

    </div>
  )
}

export default CardTema