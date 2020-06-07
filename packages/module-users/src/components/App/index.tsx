import * as React from 'react'
import { connect } from 'react-redux'
import { UrlService, UrlChangeListener } from '@marcingardas/communication'

import * as styles from './index.module.css'
import { State } from '../../store/types'
import { User } from '../../model/User'

type ComponentProps = {
    users: User[],
}
type ComponentState = {
    visible: boolean,
}

class App extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
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
        const { users } = this.props;

        if (!visible) {
            return <></>
        }

        return (
            <div className={styles.wrapper}>
                {users.map((user: User) => (
                    <div className={styles.text}
                        onClick={() => this.changePage('/users/' + user.id)}>
                        {user.name}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    users: state.users,
})

export default connect(mapStateToProps)(App)
