import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { UsersBidsComponent } from './users-bids/users-bids.component';
import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { ReversePipe } from './reverse.pipe'

@NgModule({
  imports: [BrowserModule],
  declarations: [AuctionMarketComponent, ProductPreviewComponent, UsersBidsComponent, SecondsToTimePipe, ReversePipe],
  exports: [AuctionMarketComponent]
})
export class AuctionMarketModule { }