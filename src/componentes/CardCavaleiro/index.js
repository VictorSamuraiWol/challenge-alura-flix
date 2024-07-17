import { useParams } from 'react-router-dom';
import { useCavaleiros } from 'contexto/CavaleirosContext';
import styles from './CardCavaleiro.module.css';
import { useEffect } from 'react';

function CardCavaleiro() {
    const { cavaleiros, setCavaleiros } = useCavaleiros();
    const parametros = useParams();

    useEffect(() => {
        fetch('http://localhost:8080/cavaleiros')
            .then(res => res.json())
            .then(dados => {
                setCavaleiros(dados)
    
            })
    }, []);

    return(
        <>  
            {cavaleiros.map(cavaleiro => { 
                return (cavaleiro.id === parametros.id) &&
                <div key={cavaleiro.id} className={styles.cardDestaqueCavaleiro}>
                    <h1>Número do Card: {cavaleiro.id}</h1>
                    <h1>{cavaleiro.tipo}</h1>
                    <img src={cavaleiro.imagem} alt='imagem do cavaleiro'/>
                    <h1>{cavaleiro.titulo}</h1>
                    <a target='_blank' rel='noreferrer' href={cavaleiro.link}>{cavaleiro.link}</a>
                    <h1>{cavaleiro.descricao}</h1>


                </div>
                }
            )}
        </>
    )
};

export default CardCavaleiro;