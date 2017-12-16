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

    startBuildingNew(){
        this.product = new Product("", "", "", "", "", null, null);
        this.newProduct = true;
        return this.product;
    }

    startBuildingExisting(name: string){
            this.newProduct = false;
            return this.auctionService.getProductAuction(name)
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

    canDeleteProduct(){
        return !this.newProduct;
    }
}
