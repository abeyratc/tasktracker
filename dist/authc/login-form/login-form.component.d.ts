import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
export declare class LoginFormComponent {
    authService: AuthService;
    router: Router;
    username: string;
    password: string;
    name: string;
    errorun: string;
    errorpw: string;
    constructor(authService: AuthService, router: Router);
    login(): void;
    logout(): void;
    redirectTo(redirectUrl: string): string;
    clearMessages(): void;
}
