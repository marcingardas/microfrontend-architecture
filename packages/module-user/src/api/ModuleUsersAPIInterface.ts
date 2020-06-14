import { User } from '../model/User'

export const ModuleUsersAPIName = 'users'

export interface ModuleUsersAPIInterface {
    getUsers(): Array<User>
}
