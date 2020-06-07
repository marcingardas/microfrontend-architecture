import { combineReducers } from 'redux'
import usersReducer from './reducers'

export const index = combineReducers({
    usersReducer,
})
