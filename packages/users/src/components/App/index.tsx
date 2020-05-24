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

    componentDidMount() {
        window.addEventListener('popstate', (event) => {
            if (event.state === 'users') {
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
                <div className={styles.text}>
                    This is the users module
                </div>
            </div>
        )
    }
}

export default App
