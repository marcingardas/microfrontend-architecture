import { User } from '../model/User'

export interface UsersState {
    users: User[]
    loading: boolean
    error: string | null
}

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_USERS_COMPLETED = 'FETCH_USERS_COMPLETED'

interface FetchUsersBeginAction {
    type: typeof FETCH_USERS_BEGIN
    payload: null
}

interface FetchUsersErrorAction {
    type: typeof FETCH_USERS_ERROR
    payload: {
        error: string
    }
}

interface FetchUsersCompletedAction {
    type: typeof FETCH_USERS_COMPLETED
    payload: {
        users: User[]
    }
}

export type UsersActionTypes = FetchUsersBeginAction | FetchUsersErrorAction | FetchUsersCompletedAction
