import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.css']
})

export class LoginFormComponent {
	@Input()
	username: string;

	@Input() 
	password: string;

	@Input()
	name: string;

	errorun: string;
	errorpw: string;

	constructor(public authService: AuthService, public router: Router) {
		this.clearMessages();
	}

	login(): void {
		if(this.username && this.password) {
			this.authService.login(this.username, this.password).subscribe(() => {
				if (this.authService.isLoggedIn) {
				console.log("redirectUrl="+this.authService.redirectUrl)
					let redirect = this.redirectTo(this.authService.redirectUrl);
					this.router.navigate([redirect]);
				} else {
					console.log("not logged in")
				}
    		});
		} else {
			if(!this.username) {
				this.errorun = '* Username required'
			}
			if(!this.password) {
				this.errorpw = '* Password required'
			}
		}
	}

	logout() {
		this.authService.logout();
	}

    redirectTo(redirectUrl:string): string {
    	if(!redirectUrl || redirectUrl === 'login') {
    		return '/taskboard';
    	} else {
    		return redirectUrl;
    	}
    }

	clearMessages(): void {
		this.errorun = '';
		this.errorpw = '';
	}
}