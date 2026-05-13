import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
    return (
    <>
        <Popup
            trigger={
                <button
                    className='border border-orange-500 text-orange-400 rounded-lg px-5 py-2 
                    hover:bg-orange-500 hover:text-white transition duration-300
                    shadow-md shadow-orange-500/20'
                >
                    Nova Postagem
                </button>
            }
            modal
            contentStyle={{
                borderRadius: '1rem',
                paddingBottom: '2rem',
                background: '#18181b',
                border: '1px solid #3f3f46'
            }}
        >
            <FormPostagem />
        </Popup>
    </>
);
}

export default ModalPostagem;