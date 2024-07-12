import styles from './Campo.module.css';

function Campo({ newValue, setNewValue, titulo, placeholder }) {

    function setNewValueFun (event) {
        setNewValue(event.target.value)
        console.log(newValue, '- campo text')
    }

    return (
        <div className={styles.campo}>
            <label>{titulo}</label>
            <input 
                value={newValue} 
                onChange={setNewValueFun} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default Campo;