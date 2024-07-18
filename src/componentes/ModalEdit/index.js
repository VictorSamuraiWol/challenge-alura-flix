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

    let { cavaleiros, setCavaleiros, newTitulo, setNewTitulo, newLink, setNewLink, newTipo, setNewTipo, newImagem, setNewImagem, newDescricao, setNewDescricao, newId } = useCavaleiros();

    const [formData, setFormData] = useState({});

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //função utilizando PUT para alterar na API
    async function aoSalvarModal() {
        // event.preventDefault();
        const jsonBody = JSON.stringify({
            titulo: newTitulo,
            link: newLink,
            tipo: newTipo,
            imagem: newImagem,
            descricao: newDescricao
        })
        await fetch(`http://localhost:8080/cavaleiros/${idModal}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            console.log('Salvei!!!')
            alert('Cavaleiro atualizado com sucesso!!!')
        }) 
        .catch((error) => {
            console.log(error)
        })    
    }

    function aoAlterarModalTitulo(event) {
        setNewTitulo(event.target.value)
    }

    function aoAlterarModalTipo(event) {
        setNewTipo(event.target.value)
    }

    function aoAlterarModalImagem(event) {
        setNewImagem(event.target.value)
    }

    function aoAlterarModalVideo(event) {
        setNewLink(event.target.value)
    }

    function aoAlterarModalDescricao(event) {
        setNewDescricao(event.target.value)
    }

    //Limpar campos
    function cleanForm() {
        setNewTitulo('')
        setNewLink('')
        setNewTipo('')
        setNewImagem('')
        setNewDescricao('')
    }


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
                    aoAlterarModal={aoAlterarModalTitulo}
                    newValue={newTitulo}
                    titulo='Titulo'
                    required={true}
                ></Campo>

                <ListaSuspensa 
                    aoAlterarModal={aoAlterarModalTipo} 
                    newValue={newTipo}
                    required={true} 
                ></ListaSuspensa>

                <Campo 
                    aoAlterarModal={aoAlterarModalImagem} 
                    newValue={newImagem}
                    titulo='Imagem'
                    required={true} 
                ></Campo>

                <Campo 
                    aoAlterarModal={aoAlterarModalVideo}
                    newValue={newLink}
                    titulo='Video' 
                    required={true} 
                ></Campo>

                <CampoTextarea 
                    aoAlterarModal={aoAlterarModalDescricao} 
                    newValue={newDescricao}
                    rows='4'
                    required={true}  
                />               

                <div className={styles.modalBotoes}>
                    <BotaoSubmit                        
                        className={styles.button}
                        nameButton='GUARDAR'
                        color='var(--color-primary)'
                        background='var(--background-color)' 
                        border='var(--color-primary)' boxShadowColor='var(--color-primary)'
                    >
                    </BotaoSubmit>

                    <Botao
                        className={styles.button} 
                        nameButton='LIMPAR'
                        color='var(--color-secondary)' 
                        background='var(--background-color)' 
                        border='var(--color-secondary)' boxShadowColor='var(--color-secondary)'
                        func={cleanForm}
                    ></Botao>
                </div>          
            
            </form>
            </Modal>
        </div>
    )
}

export default ModalEdit;
