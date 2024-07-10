import styles from './ModalEdit.module.css';
import vectorEdit from '../Grupos/Grupo/Cavaleiros/vectorEdit.png';
import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalEdit() {
  const [modalIsOpen, setIsOpen] = useState(false);

function openModal() {
    setIsOpen(true);
}

function closeModal() {
    setIsOpen(false);
}

return (
    <div className={styles.container}>
        <div className={styles.iconesTextos} onClick={openModal}>
        <img src={vectorEdit} alt='imagem edit'  />
        <p>EDITAR</p>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName={styles.modalOverlay}
        className={styles.modalContent}
        >
        <h1>EDITAR CARD:</h1>
        <button onClick={closeModal}>close</button>
        <form className={styles.formModal}>
            
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
        </form>
        </Modal>
    </div>
    )
}

export default ModalEdit;