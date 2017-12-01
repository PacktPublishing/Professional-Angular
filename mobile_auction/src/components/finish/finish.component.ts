import { Component, OnInit } from '@angular/core';

import { Product, AuctionResult } from './../../services/model';
import { AuctionResultService } from './../../services/auction-result.service';

@Component({
    selector: 'finish',
    templateUrl: '/src/components/finish/finish.component.html'
})
export class FinishComponent implements OnInit {
    products: AuctionResult;

    constructor(
        private AuctionResultService: AuctionResultService
    ) { }

    ngOnInit() {
        this.products = this.AuctionResultService.getResults();
    }
}
