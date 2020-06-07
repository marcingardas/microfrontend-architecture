import { ModuleSettingsAPIInterface } from './ModuleSettingsAPIInterface'

export class ModuleSettingsAPI implements ModuleSettingsAPIInterface {
    getTimezone(): string {
        return 'Europe/Dublin'
    }
}
