import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin.routes';
import { SharedModule } from './../shared/shared.module';
import { AuctionBuilderService } from './admin-services/auction-builder.service';
import { AuctionGuard } from './auction/auction.guard';

import { AdminComponent } from './admin.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionComponent } from './auction/auction.component';
import { ProductAuctionsComponent } from './product-auctions/product-auctions.component';
import { ProductAuctionComponent } from './product-auction/product-auction.component';
import { SubNavComponent } from './navigation/sub-nav.component';
import { SideNavComponent } from './navigation/side-nav.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRouting,
        SharedModule,
    ],
    declarations: [
        AdminComponent,
        AuctionsComponent,
        AuctionComponent,
        ProductAuctionsComponent,
        ProductAuctionComponent,
        SubNavComponent,
        SideNavComponent
    ],
    providers: [
        AuctionBuilderService,
        AuctionGuard
    ],
    exports: [AdminComponent],
})
export class AdminModule { }