import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ProductAuction } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'product-auctions',
    templateUrl: '/src/components/admin/product-auctions/product-auctions.component.html'
})
export class ProductAuctionsComponent implements OnInit {
    productAuctions: ProductAuction[] = []
    
    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        this.productAuctions = this.auctionService.getProductAuctions()
    }

    onSelect(productAuction: ProductAuction) {
        this.router.navigate( ['./admin/product-auction', productAuction.product.title] );
    }
 }
