import { User } from '../model/User'

import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_ERROR,
    FETCH_USERS_COMPLETED,
    UsersActionTypes
} from './types'

export function fetchUsersBegin(): UsersActionTypes {
    return {
        type: FETCH_USERS_BEGIN,
        payload: null
    }
}

export function fetchUsersError(error: string): UsersActionTypes {
    return {
        type: FETCH_USERS_ERROR,
        payload: {
            error,
        }
    }
}

export function fetchUsersCompleted(users: User[]): UsersActionTypes {
    return {
        type: FETCH_USERS_COMPLETED,
        payload: {
            users,
        }
    }
}
