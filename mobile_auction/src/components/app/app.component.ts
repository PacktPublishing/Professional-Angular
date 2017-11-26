import {Component} from '@angular/core';

@Component({
    selector: 'mobile-auction-app',
    template: `
    <header-component></header-component>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
`
})
export class MobileAuctionAppComponent { }
