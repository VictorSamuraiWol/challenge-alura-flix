import CardCavaleiro from 'componentes/CardCavaleiro';
import styles from './CardDestaqueCavaleiro.css';
import Header from 'componentes/Header';
import Rodape from 'componentes/Rodape';

function CardDestaqueCavaleiro() {
    return(
        <>
            <Header />
            <CardCavaleiro></CardCavaleiro>
            <Rodape />
        </>
    )
}

export default CardDestaqueCavaleiro;