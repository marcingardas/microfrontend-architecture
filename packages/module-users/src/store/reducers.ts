import { User } from '../model/User'

import {
	FETCH_USERS_BEGIN,
	FETCH_USERS_ERROR,
	FETCH_USERS_COMPLETED,
	State,
	UsersActionTypes
} from './types'

const initialState: State = {
	users: [] as Array<User>,
	loading: false,
	error: null,
}

export default function(state = initialState, action: UsersActionTypes): State {
	switch (action.type) {
	case FETCH_USERS_BEGIN:
		return initialState
	case FETCH_USERS_ERROR:
		const { error } = action.payload
		return {
			...state,
			users: [],
			loading: false,
			error,
		}
	case FETCH_USERS_COMPLETED:
		const { users } = action.payload
		return {
			...state,
			users,
			loading: false,
			error: null,
		}
	default:
		return state
	}
}
