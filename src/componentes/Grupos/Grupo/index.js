import Titulo from 'componentes/Titulo';
import Cavaleiro from './Cavaleiros';
import styles from './Grupo.module.css';

function Grupo({ titulo, backgroundColor, borderColor, borderColorBottom, boxShadow }) {
    
    return (
        <div className={styles.grupoContainer}>
                <Titulo 
                    backgroundColor={backgroundColor} 
                    titulo={titulo} 
                />
            <div className={styles.grupo}>
                <Cavaleiro 
                    borderColor={borderColor} 
                    borderColorBottom={borderColorBottom}
                    boxShadow={boxShadow} 
                />
                <Cavaleiro 
                    borderColor={borderColor}
                    borderColorBottom={borderColorBottom}
                    boxShadow={boxShadow} 
                />
                <Cavaleiro 
                    borderColor={borderColor}
                    borderColorBottom={borderColorBottom}
                    boxShadow={boxShadow} 
                />
            </div>
        </div>
    )
}

export default Grupo;