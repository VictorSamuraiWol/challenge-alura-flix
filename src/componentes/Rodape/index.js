import styles from './Rodape.module.css';
import logoMain from '../Header/LogoMain.png';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logoMain} alt='imagem logo rodape' />
        </footer>
    )
}

export default Rodape;