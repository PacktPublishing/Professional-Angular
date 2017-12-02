import {Injectable} from '@angular/core';
import { ProductAuction, Bid, AuctionResult, User } from './model';

@Injectable()
export class AuctionResultService {
    auctionResult: AuctionResult;

    constructor() {
        this.auctionResult = {
          sold: []
        };
      }

    calculateResults(productAuction: ProductAuction, nextProductAuction: ProductAuction, bid: Bid, user: User) {
        if (productAuction && bid) {
            if (bid.amount >= productAuction.product.askingPrice && bid.productTitle === productAuction.product.title) {
                this.auctionResult.sold.push({
                    title: productAuction.product.title,
                    amount: bid.amount,
                    user: user
                })
            }
        }
    }

    getResults(): AuctionResult {
        return this.auctionResult;
    }
}
