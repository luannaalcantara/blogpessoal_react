import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className=" flex justify-center bg-[#260D10] border-t border-[#4B1B20] text-[#F8ECEE] mt-10">

                <div className="container flex flex-col items-center py-6 gap-3">

                    <p className=' text-xl font-bold text-center'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    <p className=' text-[#D78E96]text-lg '>
                        Acesse nossas redes sociais
                    </p>

                    <div className='flex gap-4'>

                        <a
                            href="https://www.linkedin.com/in/luanna-alcântara"
                            target="_blank" className='hover:text-[#CA6873] hover:scale-110 transition-all duration-300' >
                            <LinkedinLogoIcon
                                size={42}
                                weight='bold'
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/seu_usuario"
                            target="_blank" className='hover:text-[#CA6873] hover:scale-110 transition-all duration-300' >
                            <InstagramLogoIcon
                                size={42}
                                weight='bold'
                            />
                        </a>

                        <a
                            href="https://www.facebook.com/seu_usuario" target="_blank"
                            className=' hover:text-[#CA6873] hover:scale-110 transition-all duration-300 '>
                            <FacebookLogoIcon
                                size={42}
                                weight='bold'
                            />
                        </a>

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

export default Footer