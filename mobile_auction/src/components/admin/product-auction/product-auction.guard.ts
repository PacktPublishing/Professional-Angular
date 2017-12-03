import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Product } from "../../../services/model";
import { AuctionService } from "../../../services/auction.service";

@Injectable()
export class ProductAuctionGuard implements CanActivate {
    product: Product;

    constructor(
        private auctionService: AuctionService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.product = this.auctionService.getProduct(route.params['id']);
        if(this.product){ return true; }
        this.router.navigate(['/admin/product-auctions']);
        return false;
    }
}
