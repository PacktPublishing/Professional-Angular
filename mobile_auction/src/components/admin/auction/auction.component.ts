import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Auction, ProductAuction } from './../../../services/model';
import { AuctionBuilderService } from './../admin-services/auction-builder.service';

@Component({
    selector: 'auction',
    templateUrl: '/src/components/admin/auction/auction.component.html'
})
export class AuctionComponent { 
    auction: Auction;
    subscription: Subscription;

    constructor(
        public route: ActivatedRoute,
        public auctionBuilderService: AuctionBuilderService
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let auctionName = params['id'];
            if (!auctionName) {
                auctionName = "";
            }
            this.auction = this.auctionBuilderService.createAuction(auctionName);
        });
    }

    addProductAuction(productAuction: ProductAuction){
        this.auctionBuilderService.addProductAuction(productAuction);
    }

    moveProductAuctionTo(productAuction: ProductAuction, location: any) {
        this.auctionBuilderService.moveExerciseTo(productAuction, location);
    }

    removeProductAuction(productAuction: ProductAuction) {
        this.auctionBuilderService.removeProductAuction(productAuction);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
