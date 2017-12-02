import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DialogRef, ModalComponent} from 'ngx-modialog';
import {BSModalContext} from 'ngx-modialog/plugins/bootstrap'

import { Product } from '../../../services/model';

export class ProductModalContext extends BSModalContext {
  constructor(public product: Product) {
    super();
    this.size = "sm";
  }
}

@Component({
  selector: 'product-modal',
  template: `<div class="modal-header">
                <h3 class="modal-title">Product Details</h3>
            </div>
            <div class="modal-body">
              <p class="m-n m-t-md">{{dialog.context.product.title}}</p>
              <img class="img-responsive" [src]="'/static/images/' + dialog.context.product.image">
              <p>{{dialog.context.product.description}}</p>
              <a [href]="productLink" target="_blank">Checkout product specifications</a>
            </div>
            <div class="modal-footer">
                <button class="btn btn-info" (click)="ok()">Close</button>
            </div>`
})

export class ProductModalComponent implements ModalComponent<ProductModalContext>, OnInit {
  context: ProductModalContext;
  productLink: SafeResourceUrl;

  constructor(
    public dialog: DialogRef<ProductModalContext>, 
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(){
    this.productLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.dialog.context.product.specLink);
  }

  ok() {
    this.dialog.close();
  }
}
