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
    isExistingAuction: boolean = false;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public auctionBuilderService: AuctionBuilderService
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            if (!params['id']) {
                this.auction = this.auctionBuilderService.startBuildingNew();
            } else {
                let auctionName = params['id'];
                this.isExistingAuction = true;
                this.auctionBuilderService.startBuildingExisting(auctionName)
                    .subscribe(
                        (data:Auction) => {
                            this.auction = <Auction>data;
                            if (!this.auction) {
                                this.router.navigate(['/admin/auctions']);
                            } else {
                                this.auctionBuilderService.auction = this.auction;
                            }
                        },
                        (err:any) => {
                            if (err.status === 404) {
                                this.router.navigate(['/admin/auctions'])
                            } else {
                                console.error(err)
                            }
                        }
                    );
            }
        });
    }

    addProductAuction(productAuction: ProductAuction){
        this.auctionBuilderService.addProductAuction(productAuction);
    }

    moveProductAuctionTo(productAuction: ProductAuction, location: any) {
        this.auctionBuilderService.moveExerciseTo(productAuction, location);
    }

    save = (formAuction: any): Promise<any> => {
        this.submitted = true;
        if (!formAuction.valid) return;
        let savePromise = this.auctionBuilderService.save().toPromise();
        savePromise.then(
            (data) => this.router.navigate(['/admin/auctions']),
            (err) => console.error(err)
        );
        return savePromise;
    }

    removeProductAuction(productAuction: ProductAuction) {
        this.removeTouched = true;
        this.auctionBuilderService.removeProductAuction(productAuction);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}