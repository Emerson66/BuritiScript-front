import styles from './styles.module.scss'

export default function Card() {
    return (
        <article className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <img className={styles.cardImage} src="windowDone.gif" />
            </div>
            <div className={styles.cardBody}>
                <a href="#" className={styles.cardLink}>
                    <div className={styles.cardType}>Artigo</div>
                    <h2 className={styles.cardTitle}>Implementando Spring Security</h2>
                </a>
            </div>
        </article>
    );
}