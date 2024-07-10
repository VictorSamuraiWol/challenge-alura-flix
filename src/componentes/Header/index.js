
import Botao from './Botao';
import styles from './Header.module.css';
import logoMain from './LogoMain.png'

function Header() {
    return (
        <header className={styles.headerMain}>
            {<img src={logoMain} alt='logo AluraFlix' />}
            <nav className={styles.navHeader}>
                <Botao 
                    color='var(--color-button-one)'
                    background='var(--backgroundColorButton-one)' 
                    border='var(--borderColorButton-one)' boxShadowColor='var(--boxShadowColor-one)' to='/' 
                    nameButton='HOME'>
                </Botao>
                <Botao 
                    color='var(--color-button-second)' background='var(--backgroundColorButton-second)' 
                    border='var(--borderColorButton-second)' boxShadowColor='var(--boxShadowColor-second)' to='/video' 
                    nameButton='NOVO VIDEO'>
                </Botao>
            </nav>
        </header>

    )
}

export default Header;