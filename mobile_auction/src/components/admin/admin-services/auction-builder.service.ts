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
    
    startBuildingNew(){
        let productAuctionArray : ProductAuction[] = [];
        this.auction = new Auction("", "", productAuctionArray);
        this.newAuction = true;
        return this.auction;
    }

    startBuildingExisting(name: string){
        this.newAuction = false;
        return this.auctionService.getAuction(name);
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

    save(){
        let auction = this.newAuction ?
            this.auctionService.addAuction(this.auction) :
            this.auctionService.updateAuction(this.auction);
        this.newAuction = false;
        return auction;
    }
}
