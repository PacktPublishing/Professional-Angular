import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        public authService: AuthService,
        public router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):boolean  {
        if(this.authService.getToken()) return true;
        else {
          this.router.navigate(['/login']);
          return false;
        };
    }
}
