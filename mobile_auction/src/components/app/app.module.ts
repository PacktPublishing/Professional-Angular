import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header.component';
import { MobileAuctionAppComponent }  from './app.component';
import { AuctionMarketModule } from './../auction-market/auction-market.module';
import { StartModule } from './../start/start.module';
import { FinishModule } from './../finish/finish.module';

import { Routing } from './app.routes';
import { AuctionResultService } from '../../services/auction-result.service';
import { AuctionService } from './../../services/auction.service';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AuctionMarketModule,
    Routing,
    StartModule,
    FinishModule,
    HttpClientModule
  ],
  declarations: [MobileAuctionAppComponent, HeaderComponent],
  providers: [
    AuctionResultService,
    AuctionService
  ],
  bootstrap: [MobileAuctionAppComponent]
})
export class AppModule { }