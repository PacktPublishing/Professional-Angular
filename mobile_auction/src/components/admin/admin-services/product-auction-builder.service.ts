import { Injectable } from '@angular/core';

import { Product, ProductAuction, Auction } from '../../../services/model';
import { AuctionService } from "../../../services/auction.service";

@Injectable()
export class ProductAuctionBuilderService {
    product: Product;
    newProduct: boolean;
    
    constructor(
        private auctionService: AuctionService
    ) { }

    startBuilding(title: string){
        if(title){
            this.product = this.auctionService.getProduct(title)
            this.newProduct = false;
        }else{
            this.product = new Product("", "", "", "", null, null);
            this.newProduct = true;
        }
        return this.product;
    }

    save(){
        let product = this.newProduct ?
            this.auctionService.addProduct(this.product) :
            this.auctionService.updateProduct(this.product);
        this.newProduct = false;
        return product;
    }

    delete(){
        this.auctionService.deleteProduct(this.product.title);
    }

    canDeleteExercise(){
        return !this.newProduct;
    }
}
