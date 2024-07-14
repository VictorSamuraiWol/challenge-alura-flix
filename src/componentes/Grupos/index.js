import Grupo from './Grupo';
import styles from './Grupos.module.css';

function Grupos() {
    return (
        <section className={styles.gruposContainer}>
            <Grupo 
                borderColorBottom='var(--color-primary)' borderColor='var(--color-primary)' backgroundColor='var(--color-primary)'
                boxShadow='var(--color-primary)'  
                titulo='Cavaleiros de Ouro'
            />
            <Grupo 
                borderColorBottom='var(--color-secondary)' borderColor='var(--color-secondary)' backgroundColor='var(--color-secondary)'
                boxShadow='var(--color-secondary)'
                titulo='Cavaleiros de Prata'
            />
            <Grupo 
                borderColorBottom='var(--color-terciary)' borderColor='var(--color-terciary)' backgroundColor='var(--color-terciary)'
                boxShadow='var(--color-terciary)'
                titulo='Cavaleiros de Bronze'
            />
        </section>
    )
}

export default Grupos;