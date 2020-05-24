import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

class ModuleUsers extends HTMLElement {
	connectedCallback() {
		ReactDOM.render((
			<React.StrictMode>
                <App />
            </React.StrictMode>
		), this);
	}
}

window.customElements.define('module-users', ModuleUsers);
