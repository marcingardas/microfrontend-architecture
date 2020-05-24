import { UrlInterface } from './UrlInterface'
import { UrlChangeListener } from './UrlChangeListener';

type UrlChangeEvent = {
    url: string
}
const UrlChangeEventName = 'communication.url.change'

export class UrlService implements UrlInterface {
    change(url: string): void {
        window.history.replaceState('', '', url);

        const urlChangeEvent: UrlChangeEvent = {
            url
        }
        var customEvent = new CustomEvent(UrlChangeEventName, urlChangeEvent as any);

        dispatchEvent(customEvent);
    }

    addChangeListener(listener: UrlChangeListener): void {
        window.addEventListener(UrlChangeEventName, (event: any) => {
            const urlChangeEvent: UrlChangeEvent = event

            listener(urlChangeEvent.url);
        })
    }
}
