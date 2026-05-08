import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 
                            bg-zinc-950 text-white border-b border-zinc-800'>

                <div className="container flex justify-between items-center text-lg mx-8">

                    {/* LOGO */}
                    <Link 
                        to='/home' 
                        className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition"
                    >
                        Blog Pessoal
                    </Link>

                    {/* USUÁRIO */}
                    <p className="text-zinc-300">
                        Bem-vinda, <span className="text-orange-400 font-semibold">{usuario.nome}</span>
                    </p>

                    {/* MENU */}
                    <div className='flex gap-6 text-zinc-300'>

                        <Link 
                            to='/postagens' 
                            className='hover:text-orange-400 transition'
                        >
                            Postagens
                        </Link>

                        <Link 
                            to='/temas' 
                            className='hover:text-orange-400 transition'
                        >
                            Temas
                        </Link>

                        <Link 
                            to='/cadastrartema' 
                            className='hover:text-orange-400 transition'
                        >
                            Cadastrar tema
                        </Link>

                        <Link 
                            to='/perfil' 
                            className='hover:text-orange-400 transition'
                        >
                            Perfil
                        </Link>

                        <Link 
                            to='' 
                            onClick={logout} 
                            className='hover:text-red-500 transition'
                        >
                            Sair
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar