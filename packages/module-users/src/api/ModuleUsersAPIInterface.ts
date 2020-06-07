import { User } from '../model/User'

export interface ModuleUsersAPIInterface {
    getModuleName(): string
    getUsers(): Array<User>
}
