import * as React from 'react'
import * as styles from './index.module.css'

const App = () => {
    const changePage = (pageTitle: string, state: string): void => {
        window.history.pushState('', pageTitle, state);
        var popStateEvent = new PopStateEvent('popstate', { state });
        dispatchEvent(popStateEvent);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <div className={styles.navigationItem}
                    onClick={() => changePage('Users', 'users')}>
                    Users
                </div>
                <div className={styles.navigationItem}
                    onClick={() => changePage('Settings', 'settings')}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default App
