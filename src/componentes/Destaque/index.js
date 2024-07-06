import styles from './Destaque.module.css';

function Destaque() {
    return (
        <div className={styles.destaque}>
            <div className={styles.textos} >
                <h1>Cavaleiros de Ouro</h1>
                <h2>Os principais cavaleiros de ouro</h2>
                <p>Lorem ipsum dolor sit amet. Aut optio voluptates aut vitae veniam sit tempora nihil non minus magni nam sunt sapiente aut sapiente expedita. Et corrupti nobis ut voluptas doloribus ea obcaecati eaque sit unde perferendis. Eum quos consequatur ut galisum veniam et explicabo facere est voluptate reiciendis.</p>           
            </div>
            <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/XpF3sp-5Gac?si=aHvJh3cC8ZJU_L8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default Destaque;