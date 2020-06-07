import * as React from 'react'
import * as styles from './index.module.css'
import { UrlService, UrlChangeListener, APIService } from '@marcingardas/communication'
import { ModuleUsersAPIInterface } from '../../api/ModuleUsersAPIInterface'

type Props = {};
type State = {
    visible: boolean,
};

class App extends React.Component<Props, State> {
    constructor(props: object) {
        super(props);

        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        const urlChangeListener: UrlChangeListener = (url: string): void => {
            if (url.search(/users\/\d+/i) >= 0) {
                this.setState({
                    visible: true,
                });

                return;
            }

            this.setState({
                visible: false,
            });
        }

        new UrlService().addChangeListener(urlChangeListener)
    }

    render() {
        const { visible } = this.state;

        if (!visible) {
            return <></>;
        }

        const moduleUsersAPI: ModuleUsersAPIInterface = new APIService().get('users') as ModuleUsersAPIInterface
        const users = moduleUsersAPI.getUsers()

        return (
            <div className={styles.wrapper}>
                <div className={styles.innerWrapper}>
                    <div className={styles.text}>
                        This is the user module

                        This is the data I got form users module: {JSON.stringify(users)}
                    </div>
                </div>
            </div>
        )
    }
}

export default App
