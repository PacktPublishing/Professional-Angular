import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { MobileAuctionAppComponent }  from './app.component';
import { AuctionMarketModule } from './../auction-market/auction-market.module';
import { StartModule } from './../start/start.module';
import { FinishModule } from './../finish/finish.module';

import { Routing } from './app.routes';
import { AuctionResultService } from '../../services/auction-result.service';

@NgModule({
  imports: [
    BrowserModule,
    AuctionMarketModule,
    Routing,
    StartModule,
    FinishModule
  ],
  declarations: [MobileAuctionAppComponent, HeaderComponent],
  providers: [AuctionResultService],
  bootstrap: [MobileAuctionAppComponent]
})
export class AppModule { }