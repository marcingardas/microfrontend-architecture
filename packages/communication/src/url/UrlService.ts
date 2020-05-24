import { UrlInterface } from './UrlInterface'
import { UrlChangeListener } from './UrlChangeListener';

type UrlChangeEvent = {
    url: string
}
const UrlChangeEventName = 'communication.url.change'

export class UrlService implements UrlInterface {
    public change(url: string): void {
        window.history.replaceState('', '', url);

        const urlChangeEvent: UrlChangeEvent = {
            url
        }
        var customEvent = new CustomEvent(UrlChangeEventName, urlChangeEvent as any);

        dispatchEvent(customEvent);
    }

    public addChangeListener(listener: UrlChangeListener): void {
        window.addEventListener(UrlChangeEventName, (event: any) => {
            listener(event.url);
        })
    }
}
