import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MobileAuctionAppComponent }  from './app.component';
import { AuctionMarketModule } from './../auction-market/auction-market.module';

@NgModule({
  imports: [BrowserModule, AuctionMarketModule],
  declarations: [MobileAuctionAppComponent],
  bootstrap: [MobileAuctionAppComponent]
})
export class AppModule { }