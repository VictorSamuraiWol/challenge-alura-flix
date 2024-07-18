import Header from 'componentes/Header';
import styles from './PaginaNaoEncontrada.module.css';

function PaginaNaoEncontrada() {
    return(
        <div className={styles.PaginaNaoEncontrada}>
            <Header />
            <span className={styles.texto404}>404</span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando? Verifique o endereço fornecido na barra de endereços ou no endereço da imagem do card.
            </p>

            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, volte para a página inicial ou coloque um link válido na barra de endereços ou no endereço da imagem do card.
            </p>
        </div>
    )
}

export default PaginaNaoEncontrada;