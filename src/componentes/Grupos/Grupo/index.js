import Titulo from 'componentes/Titulo';
import Cavaleiro from './Cavaleiros';
import styles from './Grupo.module.css';
import { Scrollbar } from 'react-scrollbars-custom';

function Grupo({ titulo, backgroundColor, borderColor, borderColorBottom, boxShadow }) {
    
    return (
        <div className={styles.grupoContainer} >
            <div className={styles.titulo}>
                <Titulo 
                    backgroundColor={backgroundColor} 
                    titulo={titulo}
                    />
            </div>
            <div className={styles.grupo}>
                    <Cavaleiro 
                        borderColor={borderColor} 
                        borderColorBottom={borderColorBottom}
                        boxShadow={boxShadow}
                        titulo={titulo} 
                    />
            </div>
        </div>
    )
}

export default Grupo;