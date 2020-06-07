export interface StorageServiceInterface {
    withModuleName(moduleName: string): StorageServiceInterface
    set(name: string, value: object): void
    get(name: string): object
}
