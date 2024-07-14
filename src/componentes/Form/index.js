import Botao from 'componentes/Header/Botao';
import Campo from './Campo';
import styles from './Form.module.css';
import ListaSuspensa from './ListaSuspensa';
import CampoTextarea from './CampoTextarea';
import { useCavaleiros } from 'contexto/CavaleirosContext';
import { useEffect } from 'react';
import BotaoSubmit from 'componentes/Header/Botao/BotaoSubmit';


function Form() {
    const { cavaleiros, setCavaleiros, newTitulo, setNewTitulo, newLink, setNewLink, newTipo, setNewTipo, newImagem, setNewImagem, newDescricao, setNewDescricao } = useCavaleiros();

    //função utilizando POST para salvar na API
    function aoSalvar(event) {
        event.preventDefault();
        const jsonBody = JSON.stringify({
            titulo: newTitulo,
            link: newLink,
            tipo: newTipo,
            imagem: newImagem,
            descricao: newDescricao
        })
        fetch('http://localhost:8080/cavaleiros', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonBody
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            console.log('Salvei!!!')
            alert('Cavaleiro adicionado com sucesso!!!')
        }) 
        .catch((error) => {
            console.log(error)
        })    
    }

    function cleanForm() {
        setNewTitulo('')
        setNewLink('')
        setNewTipo('')
        setNewImagem('')
        setNewDescricao('')
    }

    return(
        <form onSubmit={aoSalvar} className={styles.form}>
            <div className={styles.tituloSelect}>
                <Campo 
                    newValue={newTitulo} 
                    setNewValue={newTitulo => setNewTitulo(newTitulo)} 
                    titulo='Titulo' 
                    placeholder='Digite o titulo...' >
                </Campo>
                <ListaSuspensa 
                    newValue={newTipo} 
                    setNewValue={newTipo => setNewTipo(newTipo)}
                    required={true}
                    >                    
                </ListaSuspensa>
            </div>
            <div className={styles.imagemVideo}>
                <Campo 
                    newValue={newImagem} 
                    setNewValue={newImagem => setNewImagem(newImagem)} titulo='Imagem' 
                    placeholder='Link da imagem...' >
                </Campo>
                <Campo 
                    newValue={newLink} 
                    setNewValue={newLink => setNewLink(newLink)} titulo='Video' 
                    placeholder='Link do embed video...' 
                    required={true}
                >
                </Campo>
            </div>
            <div className={styles.textareaContainer}>
                <CampoTextarea 
                    newValue={newDescricao} 
                    setNewValue={newDescricao => setNewDescricao(newDescricao)} 
                    rows='10' 
                />
            </div>
            <div className={styles.botoes}>
                <BotaoSubmit 
                    color='var(--color-button-second)' background='var(--backgroundColorButton-second)' 
                    border='var(--borderColorButton-second)' boxShadowColor='var(--boxShadowColor-second)' 
                    nameButton='GUARDAR'
                    // func={aoSalvar}
                >
                </BotaoSubmit>

                <Botao 
                    color='var(--color-button-one)'
                    background='var(--backgroundColorButton-one)' 
                    border='var(--borderColorButton-one)' boxShadowColor='var(--boxShadowColor-one)'
                    nameButton='LIMPAR'
                    func={cleanForm}
                >
                </Botao>
            </div>
        </form>
    )
}

export default Form;
