import Header from 'componentes/Header';
import styles from './Video.module.css';
import Rodape from 'componentes/Rodape';
import Form from 'componentes/Form';

function Video() {
    return(
        <>
            <Header></Header>
            <section className={styles.video}>
                <h1>NOVO VIDEO</h1>
                <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VIDEO.</p>
                <h3>Criar Card</h3>
                <Form></Form>
            </section>
            <Rodape></Rodape>
        </>
    )
}

export default Video;