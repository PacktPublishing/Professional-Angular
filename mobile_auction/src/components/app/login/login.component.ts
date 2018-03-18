import { Component } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'signup',
    templateUrl: '/src/components/app/login/login.component.html',
})
export class LoginComponent {
    authUser: any;
    status: string = '';
    
    constructor(public authService: AuthService) {
        this.authUser = {username: "", password: ""}
    }
    login(authUser: any){
        this.authService.login(authUser.username, authUser.password)
            .subscribe((response: any) => {
              if (response.status === "success"){
                console.log('sucess')
                this.status = "Login successful";
                localStorage.setItem('token', response.data.token);
                sessionStorage.setItem( 'currentUser', JSON.stringify({name: response.data.user.username}));
              }
              else this.status = "Login unsuccessful";
            });
    }
}