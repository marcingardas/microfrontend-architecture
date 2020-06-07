import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StorageService } from '@marcingardas/communication'

import index from './store/reducers'
import App from './components/App'
import { ModuleUsersAPI } from './api/ModuleUsersAPI'

class ModuleUsers extends HTMLElement {
	connectedCallback() {
		const store = createStore(index)

		const moduleUsersAPI = new ModuleUsersAPI(store)
		const storageService = new StorageService().withModuleName('users')
		storageService.set('api', moduleUsersAPI)

		ReactDOM.render((
			<React.StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
            </React.StrictMode>
		), this)
	}
}

window.customElements.define('module-users', ModuleUsers)
