export interface StorageServiceInterface {
    withModuleName(moduleName: string): void
    set(name: string, value: object): void
    get(name: string): object
}
