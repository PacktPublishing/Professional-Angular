import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MobileAuctionAppComponent }  from './app.component';
import {AuctionMarketComponent} from '../auction-market/auction-market.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MobileAuctionAppComponent, AuctionMarketComponent],
  bootstrap: [MobileAuctionAppComponent]
})
export class AppModule { }