import { Injectable } from '@angular/core';

import { AuctionService } from './../../../services/auction.service';
import { Auction, Product, ProductAuction } from './../../../services/model';

@Injectable()
export class AuctionBuilderService {
    auction: Auction;
    newAuction: boolean;
    firstProductAuction: boolean = true;

    constructor(
        public auctionService: AuctionService
    ){}

    createAuction(title: string){
        if(title){
            this.auction = this.auctionService.getAuction(title)
            this.newAuction = false;
        }else{
            this.auction = new Auction("", []);
            this.newAuction = true;
        }
        return this.auction;
    }

    removeProductAuction(productAuction: ProductAuction){
        var currentIndex = this.auction.productAuctions.map(function(pa) { return pa.product.title; }).indexOf(productAuction.product.title);
        this.auction.productAuctions.splice(currentIndex, 1)
    }

    addProductAuction(productAuction: ProductAuction){
        if(this.newAuction && this.firstProductAuction){
            this.auction.productAuctions.splice(0, 1);
            this.firstProductAuction = false;
        }
        this.auction.productAuctions.push(productAuction);
    }

    moveExerciseTo(productAuction: ProductAuction, toIndex: number ){
        if (toIndex < 0 || toIndex >= this.auction.productAuctions.length) return;
        var currentIndex = this.auction.productAuctions.indexOf(productAuction);
        this.auction.productAuctions.splice(toIndex, 0, this.auction.productAuctions.splice(currentIndex, 1)[0]);
    }
}
