import { UrlChangeListener } from './UrlChangeListener'

export interface UrlInterface {
    change(url: string): void
    addChangeListener(listener: UrlChangeListener): void
}
