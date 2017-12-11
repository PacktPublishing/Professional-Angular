import { Component, Input, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Auction, Product, ProductAuction, Bid, User, ErrorMessages, AuctionResult } from './../../services/model';

import { AuctionService } from './../../services/auction.service';
import { AuctionResultService } from './../../services/auction-result.service';

@Component({
  selector: 'auction-market',
  templateUrl: '/src/components/auction-market/auction-market.component.html'
})
export class AuctionMarketComponent implements OnInit, DoCheck, OnDestroy{
    auction: Auction;
    currentProductIndex: number;
    currentProductAuction: ProductAuction;
    productAuctionRunningDuration: number;
    productAuctionTrackingInterval: number;
    bidAmount: number;
    bid: Bid;
    user: User;
    errorMessages: ErrorMessages= new ErrorMessages('', '');
    dataLoaded:boolean = false;
    private sub: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auctionResultService: AuctionResultService,
        private auctionService: AuctionService
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.getAuction(params['id']);
        })
    }
    
    ngDoCheck():any {
        if (!this.dataLoaded) {
            this.start();
        }
    }

    ngOnDestroy():any {
        this.sub.unsubscribe();
    }

    getAuction(name: string) {
        this.auctionService.getAuction(name)
            .subscribe(
                (data:Auction) => {
                    this.auction = data;
                },
                (err:any) => {
                    console.error(err)
                }
            );
    }

    getNextProductAuction(): ProductAuction {
        let nextProductAuction: ProductAuction = null;
        if (this.currentProductIndex < this.auction.productAuctions.length - 1) {
            nextProductAuction = this.auction.productAuctions[this.currentProductIndex + 1];
        }
        console.log('currentProductAuction', this.currentProductAuction)
        return nextProductAuction;
    }

    start(){
        if(this.auction)
        {
            this.dataLoaded = true;
            this.currentProductIndex = 0;
            this.currentProductAuction = this.auction.productAuctions[this.currentProductIndex];
            this.startProductAuction(this.currentProductAuction);
        }
    }

    startProductAuction(productAuction: ProductAuction) {
        this.productAuctionRunningDuration = 0;
        this.currentProductAuction = productAuction
        this.productAuctionTrackingInterval = window.setInterval(() => {
        if (this.productAuctionRunningDuration >= this.currentProductAuction.duration) {
            clearInterval(this.productAuctionTrackingInterval);
            let next: ProductAuction = this.getNextProductAuction();
            this.auctionResultService.calculateResults(productAuction, next, this.bid, this.getUser());
            if (next) {
                this.startProductAuction(next);
                this.currentProductIndex++;
            }
            else {
                this.router.navigate(['/finish']);
            }
            if (localStorage.getItem('productSellingPrice')) {
                localStorage.removeItem('productSellingPrice');
            }
            return;
        }
        if (localStorage.getItem('productSellingPrice')) {
            let productSellingPrice = Number(localStorage.getItem('productSellingPrice'));
            this.currentProductAuction.product.sellingPrice = productSellingPrice;
        }
        ++this.productAuctionRunningDuration;
        }, 1000);
    }

    getUser(): User {
        let user = JSON.parse(sessionStorage.getItem('currentUser'))
        if (!user) {
            this.errorMessages.userError = 'User not found, please create a user above.';
            return null;
        }
        if (this.errorMessages.userError) {
            this.errorMessages.userError = '';
        }
        return user;
    }

    onBid() {
        this.user = this.getUser()
        if (this.user && this.productAuctionRunningDuration < this.currentProductAuction.duration) {
            if (this.bidAmount > this.currentProductAuction.product.sellingPrice) {
                this.bid = new Bid(+this.bidAmount, this.currentProductAuction.product.title, this.user)
                this.currentProductAuction.product.sellingPrice = this.bid.amount;
                localStorage.setItem('productSellingPrice', this.currentProductAuction.product.sellingPrice.toString())
            }
            else{
                this.errorMessages.bidError = 'Your bid is too low'
            }
        }
        else{
            this.errorMessages.bidError = 'You cannot place bids at the moment.'
        }
    }
}
