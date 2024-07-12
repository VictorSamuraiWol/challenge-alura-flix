import styles from './Botao.module.css';
import { Link } from 'react-router-dom';

function Botao({ func, type, color, background, border, boxShadowColor, to, nameButton }) {
    return (
        <Link to={to}>
            <button onClick={func} type={type} style={{ color: color, backgroundColor: background, border: `1px solid ${border}`, boxShadow: `0px 0px 8px ${boxShadowColor}` }} className={styles.botao}>{nameButton}</button>
        </Link>
    )
}

export default Botao;