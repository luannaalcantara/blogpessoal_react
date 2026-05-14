import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='
                            border
                            border-[#BD4251]
                            text-[#F8ECEE]
                            bg-[#260D10]
                            rounded-xl
                            px-5
                            py-3
                            font-semibold
                            hover:bg-[#BD4251]
                            hover:text-white
                            transition-all
                            duration-300
                            shadow-lg
                            shadow-[#BD4251]/20
                            hover:scale-105
                        '
                    >
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem',
                    background: '#260D10',
                    border: '1px solid #4B1B20',
                    width: '90%',
                    maxWidth: '700px'
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    )
}

export default ModalPostagem