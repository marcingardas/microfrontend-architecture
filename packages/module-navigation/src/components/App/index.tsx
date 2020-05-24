import * as React from 'react'
import * as styles from './index.module.css'
import { UrlService } from '@marcingardas/communication'

const App = () => {
    const changePage = (url: string): void => {
        UrlService.change(url)
        /*
        window.history.replaceState('', pageTitle, state);
        var popStateEvent = new PopStateEvent('popstate', { state });
        dispatchEvent(popStateEvent);
        */
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <div className={styles.navigationItem}
                    onClick={() => changePage('users')}>
                    Users
                </div>
                <div className={styles.navigationItem}
                    onClick={() => changePage('settings')}>
                    Settings
                </div>
            </div>
        </div>
    )
}

export default App
