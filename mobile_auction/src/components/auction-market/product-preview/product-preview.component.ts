import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';

import { Product, Auction, ProductAuction } from './../model';
import {ProductModalComponent, ProductModalContext} from './product-modal.component';

@Component({
  selector: 'product-preview',
  templateUrl: '/src/components/auction-market/product-preview/product-preview.component.html'
})

export class ProductPreviewComponent implements OnChanges {
  @Input() auction: Auction;
  @Input() currentProductAuction: number;
  auctionPreview: ProductAuction[];
  safeProductLinks: Array<SafeResourceUrl>;

  constructor(
    private sanitizer: DomSanitizer,
    private modal: Modal
  ) {}

  ngOnChanges() {
    this.auctionPreview = this.auction.productAuctions.slice(this.currentProductAuction + 1, this.currentProductAuction + 4);
    console.log(this.auctionPreview);
  }

  showModal(product: Product) {
    var dialog = this.modal.open(ProductModalComponent, overlayConfigFactory(new ProductModalContext(product)));
  };
}
