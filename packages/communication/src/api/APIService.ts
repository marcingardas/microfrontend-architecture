import { APIServiceInterface } from './APIServiceInterface'

const APIPrefix = 'api.'

export class APIService implements APIServiceInterface {
    private moduleName

    constructor(moduleName: string) {
        this.moduleName = moduleName
    }

    public set(api: object): void {
        window[APIPrefix + this.moduleName] = api
    }

    public get(): object {
        return window[APIPrefix + this.moduleName]
    }
}
