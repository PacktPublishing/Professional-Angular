import { Component } from '@angular/core';

import { User } from '../../../services/model';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'signup',
    templateUrl: '/src/components/app/login/login.component.html',
})
export class LoginComponent {
    user: User;
    authUser: any;
    
    constructor(public authService: AuthService) {
        this.user = new User('');
        this.authUser = {username: "", password: ""}
    }
    login(authUser: any){
        this.createUser(authUser.username);
        this.authService.login(authUser.username, authUser.password);
    }
    createUser(username){
        sessionStorage.setItem( 'currentUser', username);
        this.user.name = '';
    }
}