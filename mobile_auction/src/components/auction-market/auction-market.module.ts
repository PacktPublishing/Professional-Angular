import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { UsersBidsComponent } from './users-bids/users-bids.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AuctionMarketComponent, ProductPreviewComponent, UsersBidsComponent],
  exports: [AuctionMarketComponent]
})
export class AuctionMarketModule { }