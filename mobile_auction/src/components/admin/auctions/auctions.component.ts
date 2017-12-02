import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auction } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'auctions',
    templateUrl: '/src/components/admin/auctions/auctions.component.html'
})
export class AuctionsComponent implements OnInit{ 
    auctions: Auction[] = []

    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        this.auctions = this.auctionService.getAuctions()
    }

    onSelect(auction: Auction) {
        this.router.navigate( ['./admin/auction', auction.title] );
    }
}
