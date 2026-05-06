import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-zinc-900 text-white border-t border-zinc-700">

                <div className="container flex flex-col items-center py-6 gap-2">

                    <p className="text-xl font-bold text-orange-400">
                        Blog Pessoal
                    </p>

                    <p className="text-zinc-400">
                        Compartilhando ideias, código e criatividade ✨
                    </p>

                    <p className="text-sm text-zinc-500">
                        © {data} - Todos os direitos reservados
                    </p>

                    <div className="flex gap-4 mt-2">
                        <a href="https://www.linkedin.com/in/luanna-alcântara" target="_blank"></a>
                        <LinkedinLogoIcon
                            size={48} weight='bold'
                            className="hover:text-orange-400 cursor-pointer transition"
                        />
                        <a href="https://www.instagram.com/seu_usuario" target="_blank"></a>
                        <InstagramLogoIcon
                            size={48} weight='bold'
                            className="hover:text-orange-400 cursor-pointer transition"
                        />
                        <a href="https://www.facebook.com/seu_usuario" target="_blank"></a>
                        <FacebookLogoIcon
                            size={48} weight='bold'
                            className="hover:text-orange-400 cursor-pointer transition"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer