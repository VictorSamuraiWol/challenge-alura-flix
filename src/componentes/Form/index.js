import Botao from 'componentes/Header/Botao';
import Campo from './Campo';
import styles from './Form.module.css';
import ListaSuspensa from './ListaSuspensa';

function Form() {
    return(
        <form className={styles.form}>
            <div className={styles.tituloSelect}>
                <Campo titulo='Titulo' placeholder='Digite o titulo...' ></Campo>
                <ListaSuspensa></ListaSuspensa>
            </div>
            <div className={styles.imagemVideo}>
                <Campo titulo='Imagem' placeholder='Link da imagem...' ></Campo>
                <Campo titulo='Video' placeholder='Digite o link do video...' ></Campo>
            </div>
            <div className={styles.textareaContainer}>
                <label>Descrição</label>
                <textarea className={styles.textarea} placeholder='Sobre o que é esse video?' rows='10' cols='1' ></textarea>
            </div>
            <div className={styles.botoes}>
                <Botao
                    color='var(--color-button-second)' background='var(--backgroundColorButton-second)' 
                    border='var(--borderColorButton-second)' boxShadowColor='var(--boxShadowColor-second)' 
                    nameButton='GUARDAR'>
                </Botao>
                <Botao 
                    color='var(--color-button-one)'
                    background='var(--backgroundColorButton-one)' 
                    border='var(--borderColorButton-one)' boxShadowColor='var(--boxShadowColor-one)'
                    nameButton='LIMPAR'>
                </Botao>
            </div>
        </form>
    )
}

export default Form;