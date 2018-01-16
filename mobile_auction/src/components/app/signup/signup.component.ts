import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'signup',
    templateUrl: '/src/components/app/signup/signup.component.html',
})
export class SignupComponent {
    authUser: any;
    
    constructor(public authService: AuthService) {
        this.authUser = {name: "", username: "", email: "", password: ""}
    }
    signup(authUser: any){
        this.authService.signup(authUser.name, authUser.username, authUser.email, authUser.password);
    }
}