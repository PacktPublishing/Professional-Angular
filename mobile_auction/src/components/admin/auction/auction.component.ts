import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Auction, ProductAuction } from './../../../services/model';
import { AuctionBuilderService } from './../admin-services/auction-builder.service';

@Component({
    selector: 'auction',
    templateUrl: '/src/components/admin/auction/auction.component.html'
})
export class AuctionComponent implements OnInit, OnDestroy { 
    auction: Auction;
    subscription: Subscription;
    submitted: boolean = false;
    removeTouched: boolean = false;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
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

    save(formAuction:any){
        this.submitted = true;
        if (!formAuction.valid) return;
        this.auctionBuilderService.save();
        this.router.navigate(['/admin/auctions']);
    }

    removeProductAuction(productAuction: ProductAuction) {
        this.removeTouched = true;
        this.auctionBuilderService.removeProductAuction(productAuction);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}