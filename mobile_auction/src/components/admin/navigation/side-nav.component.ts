import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { ProductAuction, Product } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';
import { AuctionBuilderService } from './../admin-services/auction-builder.service';

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
    showNav: boolean = true;
    productAuctions: Observable<ProductAuction[]>;
    subscription: Subscription;

    constructor(
        private router: Router,
        private auctionService: AuctionService,
        private auctionBuilderService: AuctionBuilderService
    ) { }

    ngOnInit(){
        this.generateLinks(this.router.url);
        this.hideNav(this.router.url);
        this.subscription = this.router.events.subscribe(
            (navigationEnd: NavigationEnd) => {
                let route = navigationEnd.url;

                if (route.includes('product-auction')) {
                    this.preset = {
                        route: '/admin/product-auction/new',
                        title: 'Product Auctions',
                        newButton: 'New Product Auction'
                    };
                    this.hideNav(route);
                }
                else {
                    this.preset = {
                        route: '/admin/auction/new',
                        title: 'Auctions',
                        newButton: 'New Auction'
                    };
                    this.generateLinks(route);
                    this.hideNav(route);
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
    hideNav(route: string){
        if (route.includes('product-auction/')) {
            this.showNav = false;
        }
        else{
            this.showNav = true;
        }
    }
    addProduct(product: Product) {
        this.auctionBuilderService.addProductAuction(new ProductAuction(product, 30));
    }
}