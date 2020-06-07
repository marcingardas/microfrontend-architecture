import { APIServiceInterface } from './APIServiceInterface'

const APIPrefix = 'api.'

export class APIService implements APIServiceInterface {
    public set(moduleName: string, api: object): void {
        window[APIPrefix + moduleName] = api
    }

    public get(moduleName: string): object {
        return window[APIPrefix + moduleName]
    }
}
