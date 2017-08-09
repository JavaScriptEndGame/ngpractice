import { Component } from '@angular/core';
import { AuthenticationService } from 'app/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app for product';
   pageTitle = 'app for product';

   constructor(private authService: AuthenticationService) {
   }

}
