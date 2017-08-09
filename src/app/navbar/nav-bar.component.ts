import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from 'app/shared/global-events-manager.service';
import { AuthenticationService } from 'app/authentication';
import { Router, CanActivate } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.component.html'
})

export class NavBarComponent implements OnInit {
     showNavBar = false;
    constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
    private router: Router) {
        this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
              this.showNavBar = mode;
        });
    }

    ngOnInit() { }

    logout() {
        this.authenticationService.logout();
        this.showNavBar = false;
        this.router.navigate(['/login']);
    }
}
