import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AuctionService } from './../../../services/auction.service';
import { ProductAuction } from './../../../services/model';

@Component({
    selector: 'side-nav',
    templateUrl: '/src/components/admin/navigation/side-nav.component.html'
})
export class SideNavComponent implements OnInit, OnDestroy {
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

    ngOnInit(){
        this.subscription = this.router.events.subscribe(
            (navigationEnd: NavigationEnd) => {
                let route = navigationEnd.url;
                this.productAuctions = [];

                if (route.includes('product-auction')) {
                    this.preset = {
                        route: '/admin/product-auction/new',
                        title: 'Product Auctions',
                        newButton: 'New Product Auction'
                    };
                }
                else {
                    this.preset = {
                        route: '/admin/auction/new',
                        title: 'Auctions',
                        newButton: 'New Auction'
                    };
                    this.generateLinks(route);
                }
            }
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    generateLinks(route: string) {
        if (route.includes('auction/')){
            this.productAuctions = this.auctionService.getProductAuctions();
        }
    }
}