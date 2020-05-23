import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './index.module.css'

const App = () => {
    return <div className={styles.wrapper}>App:</div>
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)