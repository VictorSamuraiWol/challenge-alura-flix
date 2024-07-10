import styles from './Campo.module.css';

function Campo({ titulo, placeholder }) {
    return (
        <div className={styles.campo}>
            <label>{titulo}</label>
            <input placeholder={placeholder} />
        </div>
    )
}

export default Campo;