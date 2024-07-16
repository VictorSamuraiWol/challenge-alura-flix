
import Botao from './Botao';
import styles from './Header.module.css';
import logoMain from './LogoMain.png'

function Header() {
    return (
        <header className={styles.headerMain}>
            <img src={logoMain} alt='logo AluraFlix' />
            <nav className={styles.navHeader}>
                <Botao 
                    color='var(--color-primary)'
                    background='var(--background-color)' 
                    border='var(--color-primary)' boxShadowColor='var(--color-primary)' 
                    to='/' 
                    nameButton='HOME'>
                </Botao>
                <Botao 
                    color='var(--color-secondary)' 
                    background='var(--background-color)' 
                    border='var(--color-secondary)' boxShadowColor='var(--color-secondary)' 
                    to='/video' 
                    nameButton='NOVO VIDEO'>
                </Botao>
            </nav>
        </header>

    )
}

export default Header;