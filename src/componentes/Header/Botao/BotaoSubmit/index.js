import styles from './BotaoSubmit.module.css';

function BotaoSubmit({ color, background, border, boxShadowColor, nameButton }) {
    return(
        <button type='submit' style={{ color: color, backgroundColor: background, border: `1px solid ${border}`, boxShadow: `0px 0px 8px ${boxShadowColor}` }} className={styles.botao}>{nameButton}</button>
    )
};

export default BotaoSubmit;