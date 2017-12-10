import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";

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
    ):Observable<boolean>  {
        let auctionName = route.params['id'];
        return this.auctionService.getAuction(auctionName)
            .take(1)
            .map(auction => !!auction)
            .do(auctionExists => {
                if (!auctionExists) this.router.navigate(['/admin/auctions/auctions-not-found']);
            })
            .catch(error => {
                    if (error.status === 404) {
                        this.router.navigate(['/admin/auctions/auctions-not-found']);
                        return Observable.of(false)
                    } else {
                        return Observable.throw(error);
                    }
                }
            )
    }
}
