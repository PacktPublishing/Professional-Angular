import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Auction, ProductAuction } from './../../../services/model';
import { AdminService } from './../admin-services/admin.service';

@Component({
    selector: 'auction',
    templateUrl: '/src/components/admin/auction/auction.component.html'
})
export class AuctionComponent { 
    auction: Auction;
    subscription: Subscription;

    constructor(
        public route: ActivatedRoute,
        public adminService: AdminService
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let auctionName = params['id'];
            if (!auctionName) {
                auctionName = "";
            }
            this.auction = this.adminService.createAuction(auctionName);
        });
    }

    addProductAuction(productAuction: ProductAuction){
        this.adminService.addProductAuction(productAuction);
    }

    moveProductAuctionTo(productAuction: ProductAuction, location: any) {
        this.adminService.moveExerciseTo(productAuction, location);
    }

    save(formAuction:any){
        console.log("Submitting:");
        console.log(this.auction);
    }

    removeProductAuction(productAuction: ProductAuction) {
        this.adminService.removeProductAuction(productAuction);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
