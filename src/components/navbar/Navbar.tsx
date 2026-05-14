import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta(
            'O Usuário foi desconectado com sucesso!',
            'info'
        )

        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className='
                w-full flex justify-center py-4 bg-[#260D10] border-b border-[#4B1B20] shadow-lg shadow-black/20'>

                <div className="
                    container flex justify-between items-center mx-8">

                    <Link
                        to='/home'
                        className='text-3xl font-bold text-[#F8ECEE] hover:text-[#CA6873] transition-all duration-300 '> Blog Pessoal
                    </Link>

                    <div className='flex gap-6 text-[#F2D9DC] font-medium'>

                        <Link
                            to='/postagens'
                            className='hover:text-[#CA6873] transition-all duration-300'> Postagens
                        </Link>

                        <Link
                            to='/temas'
                            className=' hover:text-[#CA6873] transition-all duration-300 '> Temas
                        </Link>

                        <Link
                            to='/cadastrartema'
                            className=' hover:text-[#CA6873] transition-all duration-300 '> Cadastrar tema
                        </Link>

                        <Link
                            to='/perfil'
                            className='hover:text-[#CA6873] transition-all duration-300 '> Perfil
                        </Link>

                        <Link
                            to='' onClick={logout}
                                className=' hover:text-[#BD4251] transition-all duration-300'> Sair
                        </Link>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar