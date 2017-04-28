import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Credentials } from './credentials';
export declare class AuthService {
    private http;
    private authcUrl;
    private authCredentials;
    isLoggedIn: boolean;
    redirectUrl: string;
    apitoken: string;
    constructor(http: Http);
    login(username: string, password: string): Observable<boolean>;
    logout(): void;
    private handleError(error);
    getAuthenticatedCredentials(): Credentials;
    private uuid();
}
