import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { Product } from "../../../services/model";
import { AuctionService } from "../../../services/auction.service";

@Injectable()
export class ProductAuctionGuard implements CanActivate {
    product: Product;
    sub: any;

    constructor(
        private auctionService: AuctionService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        let productName = route.params['id'];
        return this.auctionService.getProductAuction(productName)
            .take(1)
            .map(product => !!product)
            .do(productExists => {
                if (!productExists)  this.router.navigate(['/admin/product-auctions']);
            })
            .catch(error => {
                    if (error.status === 404) {
                        this.router.navigate(['/admin/product-auctions']);
                        return Observable.of(false)
                    } else {
                        return Observable.throw(error);
                    }
                }
            )
    }
}
