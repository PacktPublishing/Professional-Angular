import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ProductAuction, Product } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';
import { AuctionBuilderService } from './../admin-services/auction-builder.service';

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
    showNav: boolean = true;
    productAuctions: ProductAuction[];
    private subscription: Subscription;

    constructor(
        private router: Router,
        private auctionService: AuctionService,
        private auctionBuilderService: AuctionBuilderService
    ) { }

    ngOnInit(){
        this.generateLinks(this.router.url);
        this.hideNav(this.router.url);
    }

    setPreset(preset: any) {
        this.preset = preset;
        this.generateLinks(preset.route);
        this.hideNav(preset.route);
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
        console.log(route, route.includes('admin/auction/new'))
        if (route.includes('admin/auction/new')) {
            this.showNav = true;
        }
        else{
            this.showNav = false;
        }
    }
    addProduct(product: Product) {
        this.auctionBuilderService.addProductAuction(new ProductAuction(product, 30));
    }
}