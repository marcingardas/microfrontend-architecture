import { Store } from 'redux'
import { ModuleUsersAPIInterface } from './ModuleUsersAPIInterface'
import { User } from '../model/User'

export class ModuleUsersAPI implements ModuleUsersAPIInterface {
    private store: Store

    constructor(store: any) {
        this.store = store
    }

    getUsers(): Array<User> {
        return this.store.getState().users
    }
}
