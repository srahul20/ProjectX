import { ConfigureOptions } from './configure-options';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable({providedIn: 'root'})
export class ConfigureService {
    public config: any;

    constructor(private http: HttpClient, public configOptions: ConfigureOptions) {}

    public load(): Promise<any> {
        const headers = new HttpHeaders().set(InterceptorSkipHeader, 'true');
        const promise = this.http.get(this.buildUrl(), {'headers': headers})
            .pipe(map(this.extractData) as any)
            .toPromise();
        promise.then((config) => {
            this.config = config;
        });
        return promise;
    }

    private buildUrl(): string {
        const url = this.configOptions.ConfigurationURL;
        return url;
    }

    private makeId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    private extractData(res: Response) {
        return res || { };
    }
}
