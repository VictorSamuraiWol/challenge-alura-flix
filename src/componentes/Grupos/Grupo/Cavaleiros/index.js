import styles from './Cavaleiros.module.css';
import vectorDelete from './vectoDelete.png';
import vectorEdit from './vectorEdit.png';

function Cavaleiro({ borderColor, borderColorBottom, boxShadow }) {
    return (
        <div style={{border: `3px solid ${borderColor}`, boxShadow: `0px 0px 20px ${boxShadow}`}} className={styles.cardCavaleiro}>
            <iframe
                style={{ borderBottom: `3px solid ${borderColorBottom}`, boxShadow: `0px 0px 20px ${boxShadow}` }}
                className={styles.video} 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/XpF3sp-5Gac?si=aHvJh3cC8ZJU_L8I" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <div className={styles.iconesTextosContainer}>
                <div className={styles.iconesTextos}>
                    <img src={vectorDelete} alt='icone delete' />
                    <p>DELETAR</p>
                </div>
                <div className={styles.iconesTextos}>
                    <img src={vectorEdit} alt='icone editar' />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>
    )
}

export default Cavaleiro;
