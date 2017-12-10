import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProductAuction, Product } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Component({
    selector: 'product-auctions',
    templateUrl: '/src/components/admin/product-auctions/product-auctions.component.html'
})
export class ProductAuctionsComponent implements OnInit {
    productAuctions: Observable<ProductAuction[]>;
    subscription: any;
    
    constructor(
        private router: Router,
        private auctionService: AuctionService
    ) { }

    ngOnInit(){
        this.productAuctions = this.auctionService.getProductAuctions();
    }

    onSelect(product: Product) {
        this.router.navigate( ['./admin/product-auction', product.name] );
    }
 }
