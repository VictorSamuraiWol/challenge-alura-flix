import Destaque from 'componentes/Destaque';
import styles from './Banner.module.css';
import banner from './banner-cavaleiros.jpg';

function Banner() {
    return (
        <div style={{ position: 'relative' }} className={styles.bannerContainer}>
            <div className={styles.banner} style={{ backgroundImage: `url(${banner})` }}>
            </div>
            <Destaque />
        </div>
    )
}

export default Banner;