import { UrlChangeListener } from './UrlChangeListener'

export interface UrlServiceInterface {
    change(url: string): void
    addChangeListener(listener: UrlChangeListener): void
}
