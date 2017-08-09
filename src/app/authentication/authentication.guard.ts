
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { GlobalEventsManager } from 'app/shared/global-events-manager.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private globalEventsManager: GlobalEventsManager) { }

    canActivate(route: ActivatedRouteSnapshot) {
        // logged in so return true
        if (sessionStorage.getItem('cygnet-app-token')) {
            this.globalEventsManager.showNavBar(true);
            return true;
         }

        this.globalEventsManager.showNavBar(false);
        // not logged in so redirect to login page
         this.router.navigate(['/login']);
         return false;
    }
}

