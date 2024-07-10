import styles from './ListaSuspensa.module.css';

function ListaSuspensa() {
    return(
        <div className={styles.listaSuspensa}>
            <label>Tipo</label>
            <select value='Tipo:'>
                <option value=''>Escolha o tipo...</option>
                <option value='Cavaleiros de Ouro'>Cavaleiros de Ouro</option>
                <option value='Cavaleiros de Prata'>Cavaleiros de Prata</option>
                <option value='Cavaleiros de Bronze'>Cavaleiros de Bronze</option>
            </select>

        </div>
    )
}

export default ListaSuspensa;