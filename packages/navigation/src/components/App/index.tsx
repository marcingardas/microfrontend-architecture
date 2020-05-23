import * as React from 'react'
import * as styles from './index.module.css'

const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <div className={styles.navigationItem}>
                    Timetable
                </div>
                <div className={styles.navigationItem}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default App
