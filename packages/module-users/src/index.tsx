import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { APIService } from '@marcingardas/communication'

import reducers from './store/reducers'
import { fetchUsers } from './store/actions'
import App from './components/App'
import { ModuleUsersAPI } from './api/ModuleUsersAPI'

class ModuleUsers extends HTMLElement {
	connectedCallback() {
		const store = createStore(reducers)

		fetchUsers()(store.dispatch)

		const moduleUsersAPI = new ModuleUsersAPI(store)
		new APIService().set('users', moduleUsersAPI)

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
