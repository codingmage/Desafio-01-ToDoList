import styles from './Header.module.css'

import rocketlogo from '../assets/rocket.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={rocketlogo}/>
                <span className={styles.title}>
                    <span className={styles.blueText}>to</span>
                    <span className={styles.purpleDarkText}>do</span>
                </span>
            </header>
        </div>
    )
}
