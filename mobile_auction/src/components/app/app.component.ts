import {Component} from '@angular/core';
import { User } from './../auction-market/model';

@Component({
    selector: 'mobile-auction-app',
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1>Mobile Auction</h1>
        </div>
        <form class="navbar-form navbar-right m-t-md">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" [value]="user.name" (input)="user.name = $event.target.value">
          </div>
          <button type="button" class="btn btn-default" (click)="createUser()">Submit</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid">
      <auction-market></auction-market>
    </div>
`
})
export class MobileActionAppComponent {
    user: User;

    constructor() {
      this.user = new User('')
    }

    createUser(){
      sessionStorage.setItem( 'currentUser', JSON.stringify(this.user))
      this.user.name = '';
    }

}
