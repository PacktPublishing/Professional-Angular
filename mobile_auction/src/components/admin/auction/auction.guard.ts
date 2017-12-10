import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Auction } from "../../../services/model";
import { AuctionService } from './../../../services/auction.service';

@Injectable()
export class AuctionGuard implements CanActivate {
    auction: Auction;

    constructor(
        public auctionService: AuctionService,
        public router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.auction = this.auctionService.getAuction(decodeURI(route.params['id']));
        if(this.auction){ return true; }
        this.router.navigate(['/admin/auctions']);
        return false;
    }
}
