import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Auction } from "../../../services/model";
import { AuctionService } from './../../../services/auction.service';

@Injectable()
export class AuctionGuard implements CanActivate {
    auction: Auction;

    constructor(
        public AuctionService: AuctionService,
        public router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.auction = this.AuctionService.getAuction(route.params['id']);
        if(this.auction){ return true; }
        this.router.navigate(['/admin/auctions']);
        return false;
    }
}
