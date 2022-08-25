import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.container}>
                <a href="#">
                    <h1>BuritiScript</h1>
                </a>
                <nav>
                    
                </nav>
            </div>
        </header>
    );
}