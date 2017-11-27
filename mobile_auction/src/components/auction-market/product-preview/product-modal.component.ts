import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {DialogRef, ModalComponent} from 'ngx-modialog';
import {BSModalContext} from 'ngx-modialog/plugins/bootstrap'

export class ProductModalContext extends BSModalContext {
  constructor(public productLink: string) {
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
              <iframe width="100%" height="480" [src]="productLink" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" (click)="ok()">OK</button>
            </div>`
})

export class ProductModalComponent implements ModalComponent<ProductModalContext> {
  context: ProductModalContext;
  productLink: SafeResourceUrl;

  constructor(public dialog: DialogRef<ProductModalContext>, private sanitizer: DomSanitizer) { }

  ok() {
    this.dialog.close();
  }
}
