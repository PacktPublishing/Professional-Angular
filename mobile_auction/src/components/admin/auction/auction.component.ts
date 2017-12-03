import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
    submitted: boolean = false;
    removeTouched: boolean = false;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public AuctionBuilderService: AuctionBuilderService
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let auctionName = params['id'];
            if (!auctionName) {
                auctionName = "";
            }
            this.auction = this.AuctionBuilderService.createAuction(auctionName);
        });
    }

    addProductAuction(productAuction: ProductAuction){
        this.AuctionBuilderService.addProductAuction(productAuction);
    }

    moveProductAuctionTo(productAuction: ProductAuction, location: any) {
        this.AuctionBuilderService.moveExerciseTo(productAuction, location);
    }

    save(formAuction:any){
        this.submitted = true;
        if (!formAuction.valid) return;
        this.AuctionBuilderService.save();
        this.router.navigate(['/admin/auctions']);
    }

    save(formAuction:any){
        console.log("Submitting:");
        console.log(this.auction);
    }

    removeProductAuction(productAuction: ProductAuction) {
        this.removeTouched = true;
        this.AuctionBuilderService.removeProductAuction(productAuction);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}