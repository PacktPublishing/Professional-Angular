import { inject, async, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AuctionBuilderService } from './auction-builder.service';
import { Auction, ProductAuction, Product } from '../../../services/model';
import { AuctionService } from '../../../services/auction.service';

class MockAuctionService {
    sampleAuctions = [
        new Auction(
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
        ),
        new Auction(
            "testauction2",
            "Test auction2",
            [
                new ProductAuction(
                    new Product(
                        "SamsungGalaxyNote5", 
                        "Samsung Galaxy Note 5",
                        "GALAXY_Note_5.jpeg",
                        "The Galaxy Note 5 carries over hardware and software features from the Galaxy S6, including a refreshed design with a glass backing, improved camera, and fingerprint scanner. The device also includes built in livestreaming functionality as well as features meant for use with the device\'s bundled, spring-loaded stylus. The device was released together with the Samsung Galaxy S6 Edge+.",
                        "http://gadgets.ndtv.com/samsung-galaxy-note-5-2866",
                        300,
                        0
                    ), 20
                ),
                new ProductAuction(
                    new Product(
                        "HTCOneA9", 
                        "HTC One A9",
                        "htc_one_a9.jpg",
                        "The HTC One A9 is an Android smartphone manufactured and marketed by HTC. It was officially announced on October 20, 2015.[2][3] It is the successor to the HTC One Mini 2 in the Worldwide; but in global markets, it was sold alongside the One M9 as a mid-range offering.[4] It was launched as an effort to improve the revenue of HTC's smartphone business after the failure of the One M9",
                        "http://gadgets.ndtv.com/htc-one-a9-3051",
                        400,
                        0
                    ), 40
                )
            ]
        )
    ]

    getAuctions() {
        return Observable.of(this.sampleAuctions);
    }
    getAuction(name: string) {
        for (var i in this.sampleAuctions){
            if (this.sampleAuctions[i].name === name){
                return Observable.of(this.sampleAuctions[i]);
            }
        }
    }
}

describe('Auction Builder Service', () => {
    let service: AuctionBuilderService;

    beforeEach( async(() => {
        TestBed
            .configureTestingModule({
                providers: [
                    {provide: AuctionService, useClass: MockAuctionService},
                    AuctionBuilderService,
                ]
            });
        service = TestBed.get(AuctionBuilderService);
    }))

    it('should build a new auction object', () => {
        expect(service.startBuildingNew()).toEqual(new Auction('', '', []))
    })

    it('should return an exisiting auction object', inject(
        [AuctionService],
        (
            auctionService: AuctionService,
        ) => {
            expect(service.startBuildingExisting('testauction2')).toEqual(auctionService.getAuction('testauction2'))
        }
    ))

    it('should remove a productAuction from an auction object', inject(
        [AuctionService],
        (
            auctionService: AuctionService,
        ) => {
            auctionService.getAuctions()
                .subscribe((data: any) => {
                    let auction = data[0];
                    let productAuction = auction.productAuctions[0];

                    service.auction = auction;
                    service.removeProductAuction(productAuction);
                    expect(service.auction.productAuctions.length).toEqual(1);
                })
        }
    ))

    it('should add a productAuction to an exiting auction object', inject(
        [AuctionService],
        (
            auctionService: AuctionService,
        ) => {
            auctionService.getAuctions()
                .subscribe((data: any) => {
                    let auction = data[0];
                    let productAuction = new ProductAuction(
                        new Product(
                            "SamsungGalaxyNote5", 
                            "Samsung Galaxy Note 5",
                            "GALAXY_Note_5.jpeg",
                            "The Galaxy Note 5 carries over hardware and software features from the Galaxy S6, including a refreshed design with a glass backing, improved camera, and fingerprint scanner. The device also includes built in livestreaming functionality as well as features meant for use with the device\'s bundled, spring-loaded stylus. The device was released together with the Samsung Galaxy S6 Edge+.",
                            "http://gadgets.ndtv.com/samsung-galaxy-note-5-2866",
                            300,
                            0
                        ), 20
                    )

                    service.auction = auction;
                    service.addProductAuction(productAuction);
                    expect(service.auction.productAuctions.length).toEqual(3);
                })
        }
    ))

    it('should add a productAuction to a new auction object', inject(
        [AuctionService],
        (
            auctionService: AuctionService,
        ) => {
            auctionService.getAuctions()
                .subscribe((data: any) => {
                    let auction = data[0];
                    let productAuction = new ProductAuction(
                        new Product(
                            "SamsungGalaxyNote5", 
                            "Samsung Galaxy Note 5",
                            "GALAXY_Note_5.jpeg",
                            "The Galaxy Note 5 carries over hardware and software features from the Galaxy S6, including a refreshed design with a glass backing, improved camera, and fingerprint scanner. The device also includes built in livestreaming functionality as well as features meant for use with the device\'s bundled, spring-loaded stylus. The device was released together with the Samsung Galaxy S6 Edge+.",
                            "http://gadgets.ndtv.com/samsung-galaxy-note-5-2866",
                            300,
                            0
                        ), 20
                    )

                    service.auction = new Auction('', '', []);
                    service.newAuction = true
                    service.addProductAuction(productAuction);
                    expect(service.auction.productAuctions.length).toEqual(1);
                })
        }
    ))
})