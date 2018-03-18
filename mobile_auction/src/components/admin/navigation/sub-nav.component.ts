import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sub-nav',
    templateUrl: '/src/components/admin/navigation/sub-nav.component.html'
})
export class SubNavComponent{
  @Output() changeSideNav: EventEmitter = new EventEmitter();

  changePreset(presetType){
    if (presetType === 'auctions') {
      this.changeSideNav.emit({
        route: '/admin/auction/new',
        title: 'Auctions',
        newButton: 'New Auction'
      })
    }
    else{
      this.changeSideNav.emit({
        route: '/admin/product-auction/new',
        title: 'Product Auctions',
        newButton: 'New Product Auction'
      })
    }
  }
}
