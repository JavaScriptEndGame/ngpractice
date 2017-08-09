import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    login(username: string, password: string) {
        // TODO: Validate login credential
        sessionStorage.setItem('cygnet-app-token', 'true');
    }

    logout() {
        sessionStorage.removeItem('cygnet-app-token');
    }

}
