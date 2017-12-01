import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin.routes';

import { AdminComponent } from './admin.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionComponent } from './auction/auction.component';
import { ProductAuctionsComponent } from './product-auctions/product-auctions.component';
import { ProductAuctionComponent } from './product-auction/product-auction.component';
import { SubNavComponent } from './navigation/sub-nav.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRouting
    ],
    declarations: [
        AdminComponent,
        AuctionsComponent,
        AuctionComponent,
        ProductAuctionsComponent,
        ProductAuctionComponent,
        SubNavComponent
    ],
    exports: [AdminComponent],
})
export class AdminModule { }