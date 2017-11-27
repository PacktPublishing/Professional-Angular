import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';

import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { UsersBidsComponent } from './users-bids/users-bids.component';
import { ProductModalComponent } from './product-preview/product-modal.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [
    AuctionMarketComponent, 
    ProductPreviewComponent, 
    UsersBidsComponent,
    ProductModalComponent,
    NotificationComponent
  ],
  exports: [AuctionMarketComponent],
  entryComponents:[ProductModalComponent]
})
export class AuctionMarketModule { }