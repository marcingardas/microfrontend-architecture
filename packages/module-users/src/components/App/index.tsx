import * as React from 'react'
import * as styles from './index.module.css'
import { UrlService, UrlChangeListener } from '@marcingardas/communication'

type Props = {}
type State = {
    visible: boolean,
}

class App extends React.Component<Props, State> {
    constructor(props: object) {
        super(props)

        this.state = {
            visible: false,
        }
    }

    changePage = (url: string): void => {
        new UrlService().change(url)
    }

    componentDidMount() {
        const urlChangeListener: UrlChangeListener = (url: string): void => {
            if (url.search(/users\/?.*/i) >= 0) {
                this.setState({
                    visible: true,
                })

                return
            }

            this.setState({
                visible: false,
            })
        }

        new UrlService().addChangeListener(urlChangeListener)
    }

    render() {
        const { visible } = this.state

        if (!visible) {
            return <></>
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.text}
                    onClick={() => this.changePage('users/24')}>
                    User 24
                </div>
            </div>
        )
    }
}

export default App
