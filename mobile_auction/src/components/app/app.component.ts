import {Component} from '@angular/core';
@Component({
    selector: 'mobile-auction-app',
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1>Mobile Auction</h1>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <auction-market></auction-market>
    </div>
`
})
export class MobileAuctionAppComponent {
    name: string = 'World';
}
