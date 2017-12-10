import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionComponent } from './auction/auction.component';
import { ProductAuctionsComponent } from './product-auctions/product-auctions.component';
import { ProductAuctionComponent } from './product-auction/product-auction.component';
import { AuctionGuard } from './auction/auction.guard';
import { ProductAuctionGuard } from './product-auction/product-auction.guard';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
             {path:'', pathMatch: 'full', redirectTo: 'auctions'},
             {path:'auctions/auctions-not-found', component: AuctionsComponent },
             {path:'auctions', component: AuctionsComponent },
             {path:'auction/new',  component: AuctionComponent },
             {path:'auction/:id', component: AuctionComponent, canActivate: [AuctionGuard] },
             {path:'product-auctions', component: ProductAuctionsComponent},
             {path:'product-auction/new', component: ProductAuctionComponent },
             {path:'product-auction/:id', component: ProductAuctionComponent, canActivate: [ProductAuctionGuard] }
        ]
    }
];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);