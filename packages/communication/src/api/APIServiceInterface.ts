export interface APIServiceInterface {
    set(moduleName: string, api: object): void
    get(moduleName: string): object
}
