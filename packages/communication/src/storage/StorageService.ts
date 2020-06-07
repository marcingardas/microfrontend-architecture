import { StorageServiceInterface } from './StorageServiceInterface'

const StoragePrefix = 'communication.'

export class StorageService implements StorageServiceInterface {
    private moduleName

    private getLocalStorageKey(name: string) {
        return StoragePrefix + this.moduleName + name
    }

    public withModuleName(moduleName: string): void {
        this.moduleName = moduleName
    }

    public set(name: string, value: object): void {
        localStorage.setItem(this.getLocalStorageKey(name), JSON.stringify(value))
    }

    public get(name: string): object {
        return JSON.parse(localStorage.getItem(this.getLocalStorageKey(name)))
    }
}
