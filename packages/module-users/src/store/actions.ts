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

export function fetchUsers(): any {
    return function (dispatch: (action: object) => void): any {
        const users: User[] = [
            {
                id: '1',
                name: 'Marcin Gardas',
            },
            {
                id: '2',
                name: 'Some other user',
            }
        ]

        dispatch(fetchUsersCompleted(users))
    }
}
