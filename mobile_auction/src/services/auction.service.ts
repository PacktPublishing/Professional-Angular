import {Injectable} from '@angular/core';
import { Auction, ProductAuction, Product } from './model';

@Injectable()
export class AuctionService {
    auctions: Array<Auction> = [];
    productAuctions: Array<ProductAuction> = [];

    constructor() {
        this.setupInitialProductAuctions();
        this.setupInitialAuctions();
    }

    getProductAuctions(){
        return this.productAuctions;
    }

    getAuctions(){
        return this.auctions;
    }

    getAuction(title: string){
        for (var auction of this.auctions){
            if (auction.title === title) return auction;
        }
        return null;
    }

    setupInitialProductAuctions(){
        this.productAuctions.push(
            new ProductAuction(
              new Product(
                'Apple iPhone 6s',
                'Apple_iPhone_6S_800.png',
                'The iPhone 6S has a similar design to the 6 but updated hardware, including a strengthened chassis and upgraded system-on-chip, a 12-megapixel camera, improved fingerprint recognition sensor, and LTE Advanced support. The iPhone 6S also introduces a new hardware feature known as "3D Touch", which enables pressure-sensitive touch inputs.',
                'http://gadgets.ndtv.com/apple-iphone-6s-2952',
                830,
                0
              ),
              10
            ),
            new ProductAuction(
              new Product(
                'Blackberry DTEK50',
                'bb_DTEK50.jpg',
                'DTEK50™ ensures that how you share the private details of your life — your location, your pictures, your texts — is your decision.  Not all smartphones are equally secure.  With the DTEK series of smartphones, you have built in armor protecting your personal information.',
                'http://gadgets.ndtv.com/blackberry-dtek50-3663',
                500,
                0
              ),
              10
            ),
            new ProductAuction(
              new Product(
                'Samsung Galaxy Note 5',
                'GALAXY_Note_5.jpeg',
                'The Galaxy Note 5 carries over hardware and software features from the Galaxy S6, including a refreshed design with a glass backing, improved camera, and fingerprint scanner. The device also includes built in livestreaming functionality as well as features meant for use with the device\'s bundled, spring-loaded stylus. The device was released together with the Samsung Galaxy S6 Edge+.',
                'http://gadgets.ndtv.com/samsung-galaxy-note-5-2866',
                300,
                0
              ),
              10
            ),
            new ProductAuction(
              new Product(
                'HTC One A9',
                'htc_one_a9.jpg',
                'The HTC One A9 is an Android smartphone manufactured and marketed by HTC. It was officially announced on October 20, 2015.[2][3] It is the successor to the HTC One Mini 2 in the Worldwide; but in global markets, it was sold alongside the One M9 as a mid-range offering.[4] It was launched as an effort to improve the revenue of HTC\'s smartphone business after the failure of the One M9',
                'http://gadgets.ndtv.com/htc-one-a9-3051',
                400,
                0
              ),
              10
            ),
            new ProductAuction(
              new Product(
                'Huawei Ascend Mate 7',
                'huawei_ascend_mate_7.jpg',
                'The Huawei_Ascend Mate 7 is powered by 1.3GHz octa-core processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 32GB via a microSD card. As far as the cameras are concerned, the Huawei Ascend Mate 7 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/huawei-ascend-mate-7-1956',
                480,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Apple iPhone 5s',
                'iphone_5s.jpg',
                'The iPhone 5S maintains almost the same external design as its predecessor, the iPhone 5, although the 5S received a new white/gold color scheme in addition to white/silver and space gray/black, however the 5S has vastly upgraded internal hardware. The 5S introduced the A7 64-bit dual-core system-on-chip, the first 64-bit processor to be used on a smartphone, accompanied by the M7 "motion co-processor".',
                'http://gadgets.ndtv.com/apple-iphone-5s-1028',
                400,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Apple iPhone SE',
                'iphone_SE.jpeg',
                'The iPhone SE serves as a successor of the iPhone 5S. It maintains the 4-inch screen size and largely identical design to the 5S, but includes selected hardware upgrades from the larger iPhone 6S model, including its updated processor, rear camera, and support for iOS 10 and iOS 11 software features, such as Apple Pay, always-on Siri activation, and Live Photos.',
                'http://gadgets.ndtv.com/apple-iphone-se-3393',
                400,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'LeEco Le 1s',
                'LeEco_Le_1s.jpeg',
                'The LeEco Le 1s is powered by 2.2GHz octa-core MediaTek Helio X10 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that cannot be expanded. As far as the cameras are concerned, the LeEco Le 1s packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/leeco-le-1s-3070',
                250,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Lenovo Zuk Z1',
                'Lenovo_Zuk_Z1.jpg',
                'The Lenovo Zuk Z1 is powered by 2.5GHz quad-core Qualcomm Snapdragon 801 processor and it comes with 3GB of RAM. The phone packs 64GB of internal storage that cannot be expanded. As far as the cameras are concerned, the Lenovo Zuk Z1 packs a 13-megapixel primary camera on the rear and a 8-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/lenovo-zuk-z1-3473',
                500,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Nokia 6',
                'nokia_6.jpg',
                'The Nokia 6 is powered by 1.4GHz octa-core Qualcomm Snapdragon 430 processor processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Nokia 6 packs a 16-megapixel primary camera on the rear and a 8-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/nokia-6-3957',
                300,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Oppo F1s',
                'OPPO_F1s.jpg',
                'The Oppo F1s is powered by octa-core MediaTek MT6750 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Oppo F1s packs a 13-megapixel primary camera on the rear and a 16-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/oppo-f1s-3678',
                355,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Samsung Galaxy J5 (2016)',
                'Samsung_Galaxy_J5_(2016).png',
                'The Samsung Galaxy J5 (2016) is powered by 1.2GHz quad-core processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Samsung Galaxy J5 (2016) packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/samsung-galaxy-j5-2016-3398',
                280,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Samsung Galaxy A3 (2016)',
                'samsung_galaxy_a3_2016.jpg',
                'The Samsung Galaxy A3 (2016) is powered by 1.5GHz quad-core processor and it comes with 1.5GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Samsung Galaxy A3 (2016) packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/samsung-galaxy-a3-2016-3151',
                264,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'Vivo Y51L',
                'Vivo_Y51L.jpg',
                'The Vivo Y51L is powered by 1.2GHz quad-core Qualcomm Snapdragon 410 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Vivo Y51L packs a 8-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/vivo-y51l-3265',
                266,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'ZTE Blade V7',
                'ZTE_Blade_V7.jpg',
                'The ZTE Blade V7 is powered by 1.3GHz octa-core MediaTek MT6753 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded. As far as the cameras are concerned, the ZTE Blade V7 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/mobiles/news/zte-blade-v7-blade-v7-lite-first-look-808197',
                270,
                0
              ),
              5
            ),
            new ProductAuction(
              new Product(
                'ZTE Zmax 2',
                'ZTE_Zmax_2.jpg',
                'The ZTE Zmax 2 is powered by 1.2GHz quad-core Qualcomm Snapdragon 410 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded. As far as the cameras are concerned, the ZTE Zmax 2 packs a 8-megapixel primary camera on the rear and a 2-megapixel front shooter for selfies.',
                'http://gadgets.ndtv.com/zte-zmax-2-2982',
                150,
                0
              ),
              5
            )
          )
    }

    setupInitialAuctions(){
        let productAuctions = this.getProductAuctions();
        let auction = new Auction("Smartphone Auction", productAuctions);
        
        this.auctions.push(auction);
    }
}
