import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:  ['app/app.component.css'],
})

export class AppComponent {
	private firstName: string = "Ashwini";

	title = this.firstName + "'s Task board";
}
