import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { ProductAuctionBuilderService } from './../admin-services/product-auction-builder.service';
import { Product} from "../../../services/model";

@Component({
    selector: 'product-auction',
    templateUrl: '/src/components/admin/product-auction/product-auction.component.html'
})
export class ProductAuctionComponent implements OnInit, OnDestroy { 
    product: Product;
    submitted: boolean = false;
    productForm: FormGroup;
    model: any;
    video: any;
    subscription: any;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public productAuctionBuilderService: ProductAuctionBuilderService,
        public formBuilder: FormBuilder
    ){}

    ngOnInit():any{
        this.subscription = this.route.params.subscribe(params => {
            let productName = params['id'];
            if (productName === 'new') {
                productName = "";
            }
            this.product = this.productAuctionBuilderService.startBuilding(productName);
        });

        this.buildProductForm();
    }

    buildProductForm(){
        this.productForm = this.formBuilder.group({
            'title': [this.product.title, Validators.required],
            'description': [this.product.description, Validators.required],
            'image': [this.product.image, Validators.required],
            'specLink': [this.product.specLink, Validators.required],
            'askingPrice': [this.product.askingPrice, Validators.required]
        })
    }

    onSubmit(formProduct: FormGroup){
        this.submitted = true;
        if (!formProduct.valid) return;
        this.mapFormValues(formProduct);
        this.productAuctionBuilderService.save();
        this.router.navigate(['/admin/product-auctions']);
    }

    delete() {
        this.productAuctionBuilderService.delete();
        this.router.navigate( ['/admin/product-auctions'] );
    }

    canDeleteProduct(){
        this.productAuctionBuilderService.canDeleteProduct();
    }

    mapFormValues(form: FormGroup){
        this.product.title = form.controls['title'].value;
        this.product.description = form.controls['description'].value;
        this.product.image = form.controls['image'].value;
        this.product.specLink = form.controls['specLink'].value;
        this.product.askingPrice = +form.controls['askingPrice'].value;
        this.product.sellingPrice = 0;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
