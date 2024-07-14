import styles from './Titulo.module.css';

function Titulo({ titulo, backgroundColor }) {

    return (
        <h3 style={{ backgroundColor: `${backgroundColor}`}} className={styles.titulo}>{titulo}</h3>
    )
}

export default Titulo;