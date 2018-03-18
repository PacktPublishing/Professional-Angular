import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ProductAuction, Product } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';
import { AuctionBuilderService } from './../admin-services/auction-builder.service';

@Component({
    selector: 'side-nav',
    templateUrl: '/src/components/admin/navigation/side-nav.component.html'
})
export class SideNavComponent implements OnInit {
    preset: Object = {
        route: '/admin/auction/new',
        title: 'Auctions',
        newButton: 'New Auction'
    };
    showNav: boolean = true;
    productAuctions: ProductAuction[];
    private subscription: Subscription;

    constructor(
        private router: Router,
        private auctionService: AuctionService,
        private auctionBuilderService: AuctionBuilderService
    ) { }

    setPreset(preset: any) {
        this.preset = preset;
    }

    generateLinks(route: string) {
        if (route.includes('auction/')){
            this.auctionService.getProductAuctions()
            .subscribe(
                (productAuctions: ProductAuction[]) => {
                    this.productAuctions = productAuctions;
                },
                (err: any) => console.error(err)
            );
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