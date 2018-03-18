import {Component} from '@angular/core';

@Component({
    selector: 'header-component',
    template: `
    <nav class="navbar navbar-default m-b-n">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1><a class="m-r-md" [routerLink]="['/']">Mobile Auction</a></h1>
        </div>
        <div class="navbar-form navbar-right m-t-md">
          <a class="m-r-md" [routerLink]="['/admin']">
            Admin
          </a>
        </div>
      </div>
    </nav>
`
})
export class HeaderComponent {
}
