import styles from './ListaSuspensa.module.css';

function ListaSuspensa({ aoAlterarModal, required, newValue, setNewValue }) {

    function setNewValueFun (event) {
        setNewValue(event.target.value)
        console.log(newValue, '- lista suspensa')
    }

    return(
        <div className={styles.listaSuspensa}>
            <label>Tipo</label>
            <select 
                value={newValue} 
                onChange={aoAlterarModal || setNewValueFun}
                required={required} 
            >
                <option value=''>Escolha o tipo...</option>
                <option value='Cavaleiros de Ouro'>Cavaleiros de Ouro</option>
                <option value='Cavaleiros de Prata'>Cavaleiros de Prata</option>
                <option value='Cavaleiros de Bronze'>Cavaleiros de Bronze</option>
            </select>

        </div>
    )
}

export default ListaSuspensa;