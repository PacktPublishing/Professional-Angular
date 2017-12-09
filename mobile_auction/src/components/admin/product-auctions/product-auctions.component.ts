import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ProductAuction, Product } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'product-auctions',
    templateUrl: '/src/components/admin/product-auctions/product-auctions.component.html'
})
export class ProductAuctionsComponent implements OnInit {
    productAuctions: ProductAuction[] = [];
    subscription: any;
    
    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        this.auctionService.getProductAuctions()
        .subscribe(
            (productAuctions: ProductAuction[]) => {
                this.productAuctions = productAuctions;
            },
            (err: any) => console.error(err)
        );
    }

    onSelect(product: Product) {
        this.router.navigate( ['./admin/product-auction', product.name] );
    }
 }
