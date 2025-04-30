import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ModalComponent = ({ children }: { children: React.ReactElement }) => {

    const [modalState, setModalState] = useState(true)

    return (
        <Modal
        className='w-fit mx-50 my-50'
        style={customStyles}
        onRequestClose={() => setModalState(false)}
        isOpen={modalState}>
            {children}
        </Modal>
    )
}

export default ModalComponent