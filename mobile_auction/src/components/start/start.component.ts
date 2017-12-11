import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Auction } from "../../services/model";
import { AuctionService } from './../../services/auction.service';

@Component({
    selector: 'mobile-auction-app',
    templateUrl: '/src/components/start/start.component.html'
})
export class StartComponent implements OnInit, OnDestroy {
    public auctionList:Array<Auction> = [];
    private subscription:any;

    constructor(
        private router:Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit() {
        this.subscription = this.auctionService.getAuctions()
            .subscribe(
                auctionList => this.auctionList = auctionList,
                (err:any) => console.error(err)
            );
    }

    onSelect(auction:Auction) {
        this.router.navigate(['/auction-market', auction.name]);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
