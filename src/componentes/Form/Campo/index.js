import styles from './Campo.module.css';

function Campo({ aoAlterarModal, nome, required, newValue, setNewValue, titulo, placeholder }) {

    function setNewValueFun (event) {
        setNewValue(event.target.value)
        console.log(newValue, '- campo text')
    }

    return (
        <div className={styles.campo}>
            <label>{titulo}</label>
            <input 
                value={newValue} 
                onChange={aoAlterarModal || setNewValueFun } 
                placeholder={placeholder}
                required={required}
                name={nome}
            />
        </div>
    )
}

export default Campo;
