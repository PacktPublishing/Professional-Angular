import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AuctionService } from './../../../services/auction.service';
import { ProductAuction } from './../../../services/model';

@Component({
    selector: 'side-nav',
    templateUrl: '/src/components/admin/navigation/side-nav.component.html'
})
export class SideNavComponent {
    preset: Object = {
        route: '/admin/auction/new',
        title: 'Auctions',
        newButton: 'New Auction'
    };
    productAuctions: ProductAuction[];
    private subscription: Subscription;

    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    setPreset(preset: any) {
        this.preset = preset;
    }

    generateLinks(route: string) {
        if (route.includes('auction/')){
            this.productAuctions = this.auctionService.getProductAuctions();
        }
    }
}