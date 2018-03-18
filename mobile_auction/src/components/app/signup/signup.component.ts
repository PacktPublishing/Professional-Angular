import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'signup',
    templateUrl: '/src/components/app/signup/signup.component.html',
})
export class SignupComponent {
    authUser: any;
    status: string = '';
    
    constructor(public authService: AuthService) {
        this.authUser = {name: "", username: "", email: "", password: ""}
    }
    signup(authUser: any){
        this.authService.signup(authUser.name, authUser.username, authUser.email, authUser.password)
            .subscribe((response: any) => {
              if (response.status === "success"){
                localStorage.setItem('token', response.data.token)
                this.status = "Signup successful"
              }
              else this.status = "Signup unsuccessful"
            });
    }
}