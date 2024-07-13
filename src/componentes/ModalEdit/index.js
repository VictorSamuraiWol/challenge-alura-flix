import styles from './ModalEdit.module.css';
import vectorEdit from '../Grupos/Grupo/Cavaleiros/vectorEdit.png';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Campo from 'componentes/Form/Campo';
import CampoTextarea from 'componentes/Form/CampoTextarea';
import Botao from 'componentes/Header/Botao';
import deleteIcon from './delete-icon.png'
import BotaoSubmit from 'componentes/Header/Botao/BotaoSubmit';
import { useCavaleiros } from 'contexto/CavaleirosContext';
import ListaSuspensa from 'componentes/Form/ListaSuspensa';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalEdit({ idModal }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const { cavaleiros, setCavaleiros, newTitulo, setNewTitulo, newLink, setNewLink, newTipo, setNewTipo, newImagem, setNewImagem, newDescricao, setNewDescricao, newId } = useCavaleiros();

    const [formData, setFormData] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function aoAlterarModal() {
        console.log('aoAlterarModal')
        
    }

    async function aoSalvarModal(event) {
        event.preventDefault();
        console.log('salvei!!!')
        try {
        await fetch(`http://localhost:8080/cavaleiros?id=${idModal}`, { 
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: newTitulo,
                link: newLink,
                tipo: newTipo,
                imagem: newImagem,
                descricao: newDescricao
            })
        });
            // if (!response.ok) {
            //     throw new Error('Erro ao atualizar o item');
            // }
        } catch (error) {
          console.error('Erro:', error);
        } 
    };

    return (
        <div className={styles.container}>
            <div className={styles.iconesTextos} 
            onClick={openModal}>
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
            <form onSubmit={aoSalvarModal} className={styles.formModal}>
            
            
                <Campo
                    aoAlterarModal={aoAlterarModal}                   
                    titulo='titulo'
                ></Campo>

                <ListaSuspensa 
                    aoAlterarModal={aoAlterarModal} 
                    required={true} 
                ></ListaSuspensa>

                <Campo 
                    aoAlterarModal={aoAlterarModal} 
                    setNewValue={cavaleiros.map(cavaleiro => (cavaleiro.id === idModal) ? cavaleiro.imagem : null)} 
                    titulo='Imagem' 
                ></Campo>

                <Campo 
                    aoAlterarModal={aoAlterarModal} 
                    setNewValue={cavaleiros.map(cavaleiro => (cavaleiro.id === idModal) ? cavaleiro.link : null)} 
                    titulo='Video' 
                    required={true} 
                ></Campo>

                <CampoTextarea 
                    aoAlterarModal={aoAlterarModal} 
                    setNewValue={cavaleiros.map(cavaleiro => (cavaleiro.id === idModal) ? cavaleiro.descricao : null)} 
                    rows='4'  
                />

               

                <div className={styles.modalBotoes}>
                    <BotaoSubmit                        
                        className={styles.button}
                        nameButton='GUARDAR'
                        color='var(--color-button-one)'
                        background='var(--backgroundColorButton-one)' 
                        border='var(--borderColorButton-one)' boxShadowColor='var(--boxShadowColor-one)'
                    >
                    </BotaoSubmit>

                    {/* <button type='submit' onSubmit={aoSalvar}>Submit</button> */}

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