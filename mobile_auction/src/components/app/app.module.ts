import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { MobileAuctionAppComponent }  from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { AuctionMarketModule } from './../auction-market/auction-market.module';
import { StartModule } from './../start/start.module';
import { FinishModule } from './../finish/finish.module';

import { Routing } from './app.routes';
import { AuctionResultService } from '../../services/auction-result.service';
import { AuctionService } from './../../services/auction.service';
import { LoadingBarService } from './../../services/loading-bar.service';
import { LoadingBarInterceptor } from './../../services/loading-bar.interceptor';
import { AuthInterceptor } from '../../services/auth.interceptor';
import { AuthService } from '../../services/auth.service';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MobileAuctionAppComponent, 
    HeaderComponent,
    LoadingBarComponent,
    SignupComponent,
    LoginComponent
  ],
  providers: [
    AuctionResultService,
    AuctionService,
    LoadingBarService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingBarInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [MobileAuctionAppComponent]
})
export class AppModule { }