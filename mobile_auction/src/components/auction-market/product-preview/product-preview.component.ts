import { Component, Input, OnChanges } from '@angular/core';
import { Product, Auction, ProductAuction } from './../model';

@Component({
  selector: 'product-preview',
  templateUrl: '/src/components/auction-market/product-preview/product-preview.component.html'
})

export class ProductPreviewComponent implements OnChanges {
  @Input() auction: Auction;
  @Input() currentProductAuction: number;
  auctionPreview: ProductAuction[];

  ngOnChanges() {
    this.auctionPreview = this.auction.productAuctions.slice(this.currentProductAuction + 1, this.currentProductAuction + 4);
  }
}
