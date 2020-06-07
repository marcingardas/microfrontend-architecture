import * as React from 'react'
import * as styles from './index.module.css'
import { UrlService, UrlChangeListener, APIService } from '@marcingardas/communication'

import { ModuleUsersAPIInterface } from '../../api/ModuleUsersAPIInterface'

type Props = {};
type State = {
    visible: boolean,
    userId: string | null,
};

class App extends React.Component<Props, State> {
    constructor(props: object) {
        super(props);

        this.state = {
            visible: false,
            userId: null,
        }
    }

    componentDidMount() {
        const urlChangeListener: UrlChangeListener = (url: string): void => {
            if (url.search(/users\/\d+/i) >= 0) {
                const userId = url.substring(url.lastIndexOf('/') + 1)
                this.setState({
                    visible: true,
                    userId,
                });

                return;
            }

            this.setState({
                visible: false,
                userId: null,
            });
        }

        new UrlService().addChangeListener(urlChangeListener)
    }

    render() {
        const { visible, userId } = this.state;

        if (!visible) {
            return <></>;
        }

        const moduleUsersAPI: ModuleUsersAPIInterface = new APIService().get('users') as ModuleUsersAPIInterface
        const users = moduleUsersAPI.getUsers()

        const user = users.find((user) => user.id === userId)

        return (
            <div className={styles.wrapper}>
                <div className={styles.innerWrapper}>
                    <div className={styles.text}>
                        This is the users data from <b>module-users</b>:<br />
                        {JSON.stringify(users)}
                    </div>

                    <div className={styles.text}>
                        This is the data of the current user:<br />
                        Id: <b>{user.id}</b><br />
                        Name: <b>{user.name}</b>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
