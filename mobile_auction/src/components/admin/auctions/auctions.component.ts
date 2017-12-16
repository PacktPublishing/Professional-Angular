import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Auction } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'auctions',
    templateUrl: '/src/components/admin/auctions/auctions.component.html'
})
export class AuctionsComponent implements OnInit{ 
    auctions: Observable<Auction[]>;
    subscription: any;
    notFound:boolean = false;

    constructor(
        public route:ActivatedRoute,
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        if(this.route.snapshot.url[1] && this.route.snapshot.url[1].path === 'auctions-not-found') {
            this.notFound = true;
        }
        this.auctions = this.auctionService.getAuctions();
    }

    onSelect(auction: Auction) {
        this.router.navigate( ['./admin/auction', auction.name] );
    }
}
