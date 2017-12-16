import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

import { Auction, ProductAuction, Product } from './model';

@Injectable()
export class AuctionService {
    auctions: Array<Auction> = [];
    productAuctions: Array<ProductAuction> = [];
    auction: Auction;
    collectionsUrl = 'https://api.mongolab.com/api/1/databases/professional-angular/collections';
    apiKey = 'GcNbfzEhIoYHyT_tJg-cvQimRkxxMgCq';
    params = '?apiKey=' + this.apiKey;

    constructor(
      public http: HttpClient
    ) { }

    getProductAuctions(){
        return this.http.get(this.collectionsUrl + '/product-auctions' + this.params)
                .catch(AuctionService.handleError);
    }

    getProductAuction(productName: string){
        return this.http.get(this.collectionsUrl + '/product-auctions/'+ productName  + this.params)
                .catch(AuctionService.handleError);
    }

    updateProduct(product: Product){
        for (var i = 0; i < this.productAuctions.length; i++) {
            if (this.productAuctions[i].product.title === product.title) {
                this.productAuctions[i].product = product;
            }
        }
        return product;
    }

    addProduct(product: Product){
        if (product.title) {
            this.productAuctions.push(new ProductAuction(product, 20));
            return product;
        }
    }

    deleteProduct(productName: string){
        let productIndex: number;
        for (var i = 0; i < this.productAuctions.length; i++) {
            if (this.productAuctions[i][productName].title === productName) {
                productIndex = i;
            }
        }
        if (productIndex >= 0) this.productAuctions.splice(productIndex, 1);
    }

    getAuctions(){
        return this.http.get(this.collectionsUrl + '/auctions' + this.params)
        .map((auctions:Array<any>) => {
            let result:Array<Auction> = [];
            if (auctions) {
                auctions.forEach((auction) => {
                    result.push(
                        new Auction(
                            auction.name,
                            auction.title,
                            auction.productAuctions
                        ));
                });
            }
            return result;
        })
        .catch(AuctionService.handleError);
    }

    getAuction(auctionName: string){
        return Observable.forkJoin(
            this.http.get(this.collectionsUrl + '/product-auctions' + this.params),
            this.http.get(this.collectionsUrl + '/auctions/' + auctionName + this.params))
            .map(
                (data:any) => {
                    let allProductAuctions = data[0];
                    let auction = new Auction(
                        data[1].name,
                        data[1].title,
                        data[1].productAuctions
                    )
                    auction.productAuctions.forEach(
                        (productAuction: any) => {
                            productAuction.product = allProductAuctions.find(
                                (x:any) => {
                                    return x.name === productAuction.name
                                }
                            )
                            productAuction.product.sellingPrice = 0;
                        }
                    )
                    return auction;
                }
        )
        .catch(AuctionService.handleError);
    }

    addAuction(auction: any){
        let auctionProductAuctions:any = [];
        auction.productAuctions.forEach(
            (productAuction:any) => {
                auctionProductAuctions.push({name: productAuction.product.name, duration: productAuction.duration})
            }
        );

        let body = {
            "_id": auction.name.replace(/\s/g,''),
            "productAuctions": auctionProductAuctions,
            "name": auction.name,
            "title": auction.title
        };

        return this.http.post(this.collectionsUrl + '/auctions' + this.params, body)
            .catch(AuctionService.handleError)
    }

    updateAuction(auction: Auction){
        let auctionproductAuctions:any = [];
        auction.productAuctions.forEach(
            (productAuction:any) => {
                auctionproductAuctions.push({name: productAuction.product.name, duration: productAuction.duration})
            }
        );

        let body = {
            "_id": auction.name.replace(/\s/g,''),
            "productAuctions": auctionproductAuctions,
            "name": auction.name,
            "title": auction.title
        };

        return this.http.put(this.collectionsUrl + '/auctions/' + auction.name + this.params, body)
            .catch(AuctionService.handleError);
    }

    deleteAuction(auctionName:string) {
        return this.http.delete(this.collectionsUrl + '/auctions/' + auctionName + this.params)
            .catch(AuctionService.handleError)
    }

    static handleError (error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server error');
  }
}
