import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

class ModuleNavigation extends HTMLElement {
	connectedCallback() {
		ReactDOM.render((
			<React.StrictMode>
                <App />
            </React.StrictMode>
		), this);
	}
}

window.customElements.define('module-navigation', ModuleNavigation);
