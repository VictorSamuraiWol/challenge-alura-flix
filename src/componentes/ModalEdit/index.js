import styles from './ModalEdit.module.css';
import vectorEdit from '../Grupos/Grupo/Cavaleiros/vectorEdit.png';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Campo from 'componentes/Form/Campo';
import CampoTextarea from 'componentes/Form/CampoTextarea';
import Botao from 'componentes/Header/Botao';
import deleteIcon from './delete-icon.png'
import BotaoSubmit from 'componentes/Header/Botao/BotaoSubmit';

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
        <img src={deleteIcon} alt='imagem delete' onClick={closeModal} />
        <form className={styles.formModal}>
            <Campo titulo='Titulo'></Campo>
            <Campo titulo='Categoria'></Campo>
            <Campo titulo='Imagem'></Campo>
            <Campo titulo='Video'></Campo>
            <CampoTextarea rows='4'  />
            <div className={styles.modalBotoes}>
                <BotaoSubmit
                    
                    className={styles.button}
                    nameButton='GUARDAR'
                    color='var(--color-button-one)'
                    background='var(--backgroundColorButton-one)' 
                    border='var(--borderColorButton-one)' boxShadowColor='var(--boxShadowColor-one)'
                >
                </BotaoSubmit>
                <Botao
                    className={styles.button} 
                    nameButton='LIMPAR'
                    color='var(--color-button-second)' background='var(--backgroundColorButton-second)' 
                    border='var(--borderColorButton-second)' boxShadowColor='var(--boxShadowColor-second)'
                ></Botao>
            </div>

        </form>
        </Modal>
    </div>
    )
}

export default ModalEdit;