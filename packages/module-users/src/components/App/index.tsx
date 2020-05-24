import * as React from 'react'
import * as styles from './index.module.css'

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

    changePage(pageTitle: string, state: string): void {
        window.history.replaceState('', pageTitle, state);
        var popStateEvent = new PopStateEvent('popstate', { state });
        dispatchEvent(popStateEvent);
    }

    componentDidMount() {
        window.addEventListener('popstate', (event) => {
            if (event.state.search(/users\/?.*/i) >= 0) {
                this.setState({
                    visible: true,
                });

                return;
            }

            this.setState({
                visible: false,
            });
        })
    }

    render() {
        const { visible } = this.state;

        if (!visible) {
            return <></>;
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.text}
                    onClick={() => this.changePage('User 24', 'users/24')}>
                    User 24
                </div>
            </div>
        )
    }
}

export default App
