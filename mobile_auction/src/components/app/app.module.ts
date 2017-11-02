import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MobileActionAppComponent }  from './app.component';
import {AuctionMarketComponent} from '../auction-market/auction-market.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MobileActionAppComponent, AuctionMarketComponent],
  bootstrap: [MobileActionAppComponent]
})
export class AppModule { }