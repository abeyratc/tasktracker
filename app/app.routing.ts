import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);