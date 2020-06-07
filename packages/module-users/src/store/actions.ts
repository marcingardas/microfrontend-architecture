import { User } from '../model/User'
import { StorageService } from '@marcingardas/communication'

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
        const storageService = new StorageService()
            .withModuleName('users')

        let users: User[] | null = storageService.get('users') as User[]

        console.log('Got users from StorageService => ', users)

        if (!users) {
            users = [
                {
                    id: '1',
                    name: 'Marcin Gardas',
                },
                {
                    id: '2',
                    name: 'Some other user',
                }
            ]
        }

        dispatch(fetchUsersCompleted(users))
    }
}
