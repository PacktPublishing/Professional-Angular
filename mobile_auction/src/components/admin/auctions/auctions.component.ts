import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auction } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'auctions',
    templateUrl: '/src/components/admin/auctions/auctions.component.html'
})
export class AuctionsComponent implements OnInit{ 
    auctions: Auction[] = [];
    subscription: any;

    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        this.subscription = this.auctionService.getAuctions()
        .subscribe(
            (auctions: Auction[]) => this.auctions = auctions,
            (err: any) => console.error(err)
        );
    }

    onSelect(auction: Auction) {
        this.router.navigate( ['./admin/auction', auction.name] );
    }
}
