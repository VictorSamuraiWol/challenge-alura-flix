import { useEffect } from 'react';
import styles from './Cavaleiros.module.css';
import vectorDelete from './vectoDelete.png';
import { useCavaleiros } from 'contexto/CavaleirosContext';
import ModalEdit from 'componentes/ModalEdit';


function Cavaleiro({ borderColor, borderColorBottom, boxShadow, titulo }) {
const { cavaleiros, setCavaleiros } = useCavaleiros();

useEffect(() => {
    fetch('http://localhost:8080/cavaleiros')
        .then(res => res.json())
        .then(dados => {
            setCavaleiros(dados)

        })
}, [])

console.log(cavaleiros, 'pagina home')


return (
    <div className={styles.grupo}>
        {cavaleiros.map(cavaleiro => {
            return cavaleiro.tipo === titulo && <div style={{ border: `3px solid ${borderColor}`, boxShadow: `0px 0px 20px ${boxShadow}` }} key={cavaleiro.id} className={styles.elementCavaleiro}>
                <iframe
                    style={{ borderBottom: `3px solid ${borderColorBottom}`, boxShadow: `0px 0px 20px ${boxShadow}` }}
                    className={styles.video}

                    width="430"
                    height="320"
                    src={cavaleiro.link}
                    title={cavaleiro.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>

                <div className={styles.iconesTextosContainer}>
                    <div className={styles.iconesTextos}>
                        <img src={vectorDelete} alt='icone delete' />
                        <p>DELETAR</p>
                    </div>
                    <div className={styles.iconesTextos}>
                        <ModalEdit />
                        {/* <img onClick={openModal} src={vectorEdit} alt='icone editar' /> */}
                        {/* <p>EDITAR</p> */}
                    </div>
                </div>
            </div>
        })}
    </div>
    )
}

export default Cavaleiro;
