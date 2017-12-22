import { inject, async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { AuctionsComponent } from './auctions.component';
import { AuctionService } from './../../../services/auction.service';
import { Auction, ProductAuction, Product } from './../../../services/model';
import { SecondsToTimePipe } from './../../shared/seconds-to-time.pipe';
import { IfNotDirective } from './../shared/if-not.directive';

class MockAuctionService {
    sampleAuction = new Auction(
        "testauction",
        "Test auction",
        [
            new ProductAuction(
                new Product(
                    "AppleiPhone6s", 
                    "Apple iPhone 6s",
                    "Apple_iPhone_6S_800.png",
                    "The iPhone 6S has a similar design to the 6 but updated hardware, including a strengthened chassis and upgraded system-on-chip, a 12-megapixel camera, improved fingerprint recognition sensor, and LTE Advanced support. The iPhone 6S also introduces a new hardware feature known as '3D Touch', which enables pressure-sensitive touch inputs.",
                    "http://gadgets.ndtv.com/apple-iphone-6s-2952",
                    830, 
                    0
                ), 50
            ),
            new ProductAuction(
                new Product(
                    "BlackberryDTEK50", 
                    "Blackberry DTEK50",
                    "bb_DTEK50.jpg",
                    "DTEK50™ ensures that how you share the private details of your life — your location, your pictures, your texts — is your decision.  Not all smartphones are equally secure.  With the DTEK series of smartphones, you have built in armor protecting your personal information.",
                    "http://gadgets.ndtv.com/blackberry-dtek50-3663",
                    500,
                    0
              ), 50
            )
        ]
    );

    getAuctions() {
        return Observable.of([this.sampleAuction]);
    }
}

export class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

export class MockActivatedRoute {
    snapshot = {
        url: [{}], 
        params: '', 
        queryParams: '', 
        fragment: '',
        data: '',
        outlet: '',
        component: ''
    };
}

describe('Auctions component', () => {
    let fixture: any;
    let comp: AuctionsComponent;

    beforeEach( async(() => {
        TestBed
        .configureTestingModule({
            declarations: [ AuctionsComponent, SecondsToTimePipe, IfNotDirective ],
            providers: [
                {provide: Router, useClass: MockRouter},
                {provide: ActivatedRoute, useClass: MockActivatedRoute},
                {provide: AuctionService, useClass: MockAuctionService},
                
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AuctionsComponent);
            comp = fixture.componentInstance; 
        });
    }))

    it('should instantiate the Auctions Component', () => {
        expect(comp instanceof AuctionsComponent).toBe(true, 'should create AuctionsComponent');
    });

    it('should set the notFound property to true', inject(
        [ActivatedRoute, Router],
        (
            route: ActivatedRoute,
            router: Router 
        ) => {
            route.snapshot.url[1] = new UrlSegment('auctions-not-found', {});
            route.snapshot.url[1].path  = 'auctions-not-found';

            comp.ngOnInit()
            expect(comp.notFound).toEqual(true);
        }
    ))

    it('should navigate to the selected auction', inject(
        [Router, AuctionService],
        (
            router: Router 
            auctionService: AuctionService
        ) => {
            auctionService.getAuctions()
                .subscribe((data: any) => {
                    comp.onSelect(data[0])
                    
                    expect(router.navigate).toHaveBeenCalledWith(['./admin/auction', data[0].name]);
                });
        }
    ))
})