import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { APIService } from '@marcingardas/communication'

import { ModuleSettingsAPI } from './api/ModuleSettingsAPI'
import { ModuleSettingsAPIName } from './api/ModuleSettingsAPIInterface'
import App from './components/App'

class ModuleSettings extends HTMLElement {
	connectedCallback() {
		const moduleUsersAPI = new ModuleSettingsAPI()
		new APIService().set(ModuleSettingsAPIName, moduleUsersAPI)

		ReactDOM.render((
			<React.StrictMode>
                <App />
            </React.StrictMode>
		), this);
	}
}

window.customElements.define('module-settings', ModuleSettings);
