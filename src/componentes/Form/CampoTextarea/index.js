import Campo from '../Campo';
import styles from './CampoTextarea.module.css';

function CampoTextarea({ required, aoAlterarModal, nome, newValue, setNewValue, rows }) {

    function setNewValueFun (event) {
        setNewValue(event.target.value)
        console.log(newValue, '- campo textarea')
    }

    return(
        <>
            <label>Descrição</label>
            <textarea 
                value={newValue} 
                onChange={aoAlterarModal || setNewValueFun}  
                className={styles.textarea} 
                placeholder='Sobre o que é esse video?' 
                rows={rows} 
                cols='1'
                name={nome}
                required={required}
            >
            </textarea>
        </>
    )
};

export default CampoTextarea;
