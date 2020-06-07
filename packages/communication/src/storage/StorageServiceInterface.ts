export interface StorageServiceInterface {
    set(name: string, value: object): void
    get(name: string): object
}
