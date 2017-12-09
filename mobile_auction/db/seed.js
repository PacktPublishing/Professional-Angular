/* Workout list
 To import workout list use a tool that can make POST request. The below instruction are using POSTMAN addin for chrome browser. Other tools like CURL, that can make http requests can also be used instead of POSTMAN.
 1. Open POSTMAN and paste the url https://api.mongolab.com/api/1/databases/<yourdatabasename>/collections/auctions?apiKey=<yourapikey>
 2. Update url with your database name (<yourdatabasename>) and api key (<yourapikey>).
 3. Change option from action dropdown to POST.
 4. Change data format tab to "raw"
 5. Click on the "Headers" button or the top right next to "URL Params" button.
 6. Clicking on "Headers" shows up a key-value data entry section. Add key "Content-Type" and value "application/json".
 7. Copy and paste the below json array in the text area.
 8. Click the button "Send".
 9. Check for sucess response
 */
[{ "_id": "SmartphoneAuction", "productAuctions": [{ "name": "AppleiPhone6s", "duration": 10 }, { "name": "BlackberryDTEK50", "duration": 10 }, { "name": "SamsungGalaxyNote5", "duration": 10 }, { "name": "HTCOneA9", "duration": 10 }, { "name": "HuaweiAscendMate7", "duration": 5 }, { "name": "AppleiPhone5s", "duration": 5 }, { "name": "AppleiPhoneSE", "duration": 5 }, { "name": "LeEcoLe1s", "duration": 5 }, { "name": "LenovoZukZ1", "duration": 5 }, { "name": "Nokia6", "duration": 5 }, { "name": "OppoF1s", "duration": 5 }, { "name": "SamsungGalaxyJ5", "duration": 5 }, { "name": "SamsungGalaxyA3", "duration": 5 }, { "name": "VivoY51L", "duration": 5 }, { "name": "ZTEBladeV7", "duration": 5 }, { "name": "ZTEZmax2", "duration": 5 }], "name": "SmartphoneAuction", "title": "Smartphone Auction" }]



    /* Product Auctions
     To import exercise list use a tool that can make POST request. The below instruction are using POSTMAN addin for chrome browser. Other tools like CURL, that can make http requests can also be used instead of POSTMAN.
     1. Open POSTMAN and paste the url https://api.mongolab.com/api/1/databases/<yourdatabasename>/collections/product-auctions?apiKey=<yourapikey>
     2. Update url with your database name (<yourdatabasename>) and api key (<yourapikey>).
     3. Follow step 3 and 9 from above.
     */
    [
        { 
            "_id": "AppleiPhone6s",
            "name": "AppleiPhone6s", 
            "title": "Apple iPhone 6s",
            "image": "Apple_iPhone_6S_800.png",
            "description": "The iPhone 6S has a similar design to the 6 but updated hardware, including a strengthened chassis and upgraded system-on-chip, a 12-megapixel camera, improved fingerprint recognition sensor, and LTE Advanced support. The iPhone 6S also introduces a new hardware feature known as '3D Touch', which enables pressure-sensitive touch inputs.",
            "specLink": "http://gadgets.ndtv.com/apple-iphone-6s-2952",
            "askingPrice": 830
        },
        { 
            "_id": "BlackberryDTEK50",
            "name": "BlackberryDTEK50", 
            "title": "Blackberry DTEK50",
            "image": "bb_DTEK50.jpg",
            "description": "DTEK50™ ensures that how you share the private details of your life — your location, your pictures, your texts — is your decision.  Not all smartphones are equally secure.  With the DTEK series of smartphones, you have built in armor protecting your personal information.",
            "specLink": "http://gadgets.ndtv.com/blackberry-dtek50-3663",
            "askingPrice": 500
        },
        { 
            "_id": "SamsungGalaxyNote5",
            "name": "SamsungGalaxyNote5", 
            "title": "Samsung Galaxy Note 5",
            "image": "GALAXY_Note_5.jpeg",
            "description": "The Galaxy Note 5 carries over hardware and software features from the Galaxy S6, including a refreshed design with a glass backing, improved camera, and fingerprint scanner. The device also includes built in livestreaming functionality as well as features meant for use with the device\'s bundled, spring-loaded stylus. The device was released together with the Samsung Galaxy S6 Edge+.",
            "specLink": "http://gadgets.ndtv.com/samsung-galaxy-note-5-2866",
            "askingPrice": 300
        },
        { 
            "_id": "HTCOneA9",
            "name": "HTCOneA9", 
            "title": "HTC One A9",
            "image": "htc_one_a9.jpg",
            "description": "The HTC One A9 is an Android smartphone manufactured and marketed by HTC. It was officially announced on October 20, 2015.[2][3] It is the successor to the HTC One Mini 2 in the Worldwide; but in global markets, it was sold alongside the One M9 as a mid-range offering.[4] It was launched as an effort to improve the revenue of HTC's smartphone business after the failure of the One M9",
            "specLink": "http://gadgets.ndtv.com/htc-one-a9-3051",
            "askingPrice": 400
        },
        { 
            "_id": "HuaweiAscendMate7",
            "name": "HuaweiAscendMate7", 
            "title": "Huawei Ascend Mate 7",
            "image": "huawei_ascend_mate_7.jpg",
            "description": "The Huawei_Ascend Mate 7 is powered by 1.3GHz octa-core processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 32GB via a microSD card. As far as the cameras are concerned, the Huawei Ascend Mate 7 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/huawei-ascend-mate-7-1956",
            "askingPrice": 480 
        },
        { 
            "_id": "AppleiPhone5s",
            "name": "AppleiPhone5s", 
            "title": "Apple iPhone 5s",
            "image": "iphone_5s.jpg",
            "description": "The iPhone 5S maintains almost the same external design as its predecessor, the iPhone 5, although the 5S received a new white/gold color scheme in addition to white/silver and space gray/black, however the 5S has vastly upgraded internal hardware. The 5S introduced the A7 64-bit dual-core system-on-chip, the first 64-bit processor to be used on a smartphone, accompanied by the M7 'motion co-processor'.",
            "specLink": "http://gadgets.ndtv.com/apple-iphone-5s-1028",
            "askingPrice": 400
        },
        { 
            "_id": "AppleiPhoneSE",
            "name": "AppleiPhoneSE", 
            "title": "Apple iPhone SE",
            "image": "iphone_SE.jpeg",
            "description": "The iPhone SE serves as a successor of the iPhone 5S. It maintains the 4-inch screen size and largely identical design to the 5S, but includes selected hardware upgrades from the larger iPhone 6S model, including its updated processor, rear camera, and support for iOS 10 and iOS 11 software features, such as Apple Pay, always-on Siri activation, and Live Photos.",
            "specLink": "http://gadgets.ndtv.com/apple-iphone-se-3393",
            "askingPrice": 400
        },
        { 
            "_id": "LeEcoLe1s",
            "name": "LeEcoLe1s", 
            "title": "LeEco Le 1s",
            "image": "LeEco_Le_1s.jpeg",
            "description": "The LeEco Le 1s is powered by 2.2GHz octa-core MediaTek Helio X10 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that cannot be expanded. As far as the cameras are concerned, the LeEco Le 1s packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/leeco-le-1s-3070",
            "askingPrice": 250
        },
        { 
            "_id": "LenovoZukZ1",
            "name": "LenovoZukZ1", 
            "title": "Lenovo Zuk Z1",
            "image": "Lenovo_Zuk_Z1.jpg",
            "description": "The Lenovo Zuk Z1 is powered by 2.5GHz quad-core Qualcomm Snapdragon 801 processor and it comes with 3GB of RAM. The phone packs 64GB of internal storage that cannot be expanded. As far as the cameras are concerned, the Lenovo Zuk Z1 packs a 13-megapixel primary camera on the rear and a 8-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/lenovo-zuk-z1-3473",
            "askingPrice": 500
        },
        { 
            "_id": "Nokia6",
            "name": "Nokia6", 
            "title": "Nokia 6",
            "image": "nokia_6.jpg",
            "description": "The Nokia 6 is powered by 1.4GHz octa-core Qualcomm Snapdragon 430 processor processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Nokia 6 packs a 16-megapixel primary camera on the rear and a 8-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/nokia-6-3957",
            "askingPrice": 300
        },
        { 
            "_id": "OppoF1s",
            "name": "OppoF1s", 
            "title": "Oppo F1s",
            "image": "OPPO_F1s.jpg",
            "description": "The Oppo F1s is powered by octa-core MediaTek MT6750 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Oppo F1s packs a 13-megapixel primary camera on the rear and a 16-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/oppo-f1s-3678",
            "askingPrice": 355
        },
        { 
            "_id": "SamsungGalaxyJ5",
            "name": "SamsungGalaxyJ5", 
            "title": "Samsung Galaxy J5 (2016)",
            "image": "Samsung_Galaxy_J5_(2016).png",
            "description": "The Samsung Galaxy J5 (2016) is powered by 1.2GHz quad-core processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Samsung Galaxy J5 (2016) packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/samsung-galaxy-j5-2016-3398",
            "askingPrice": 280
        },
        { 
            "_id": "SamsungGalaxyA3",
            "name": "SamsungGalaxyA3", 
            "title": "Samsung Galaxy A3 (2016)",
            "image": "samsung_galaxy_a3_2016.jpg",
            "description": "The Samsung Galaxy A3 (2016) is powered by 1.5GHz quad-core processor and it comes with 1.5GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Samsung Galaxy A3 (2016) packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/samsung-galaxy-a3-2016-3151",
            "askingPrice": 264
        },
        { 
            "_id": "VivoY51L",
            "name": "VivoY51L", 
            "title": "Vivo Y51L",
            "image": "Vivo_Y51L.jpg",
            "description": "The Vivo Y51L is powered by 1.2GHz quad-core Qualcomm Snapdragon 410 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded up to 128GB via a microSD card. As far as the cameras are concerned, the Vivo Y51L packs a 8-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/vivo-y51l-3265",
            "askingPrice": 266
        },
        { 
            "_id": "ZTEBladeV7",
            "name": "ZTEBladeV7", 
            "title": "ZTE Blade V7",
            "image": "ZTE_Blade_V7.jpg",
            "description": "The ZTE Blade V7 is powered by 1.3GHz octa-core MediaTek MT6753 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded. As far as the cameras are concerned, the ZTE Blade V7 packs a 13-megapixel primary camera on the rear and a 5-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/mobiles/news/zte-blade-v7-blade-v7-lite-first-look-808197",
            "askingPrice": 270
        },
        { 
            "_id": "ZTEZmax2",
            "name": "ZTEZmax2", 
            "title": "ZTE Zmax 2",
            "image": "ZTE_Zmax_2.jpg",
            "description": "The ZTE Zmax 2 is powered by 1.2GHz quad-core Qualcomm Snapdragon 410 processor and it comes with 2GB of RAM. The phone packs 16GB of internal storage that can be expanded. As far as the cameras are concerned, the ZTE Zmax 2 packs a 8-megapixel primary camera on the rear and a 2-megapixel front shooter for selfies.",
            "specLink": "http://gadgets.ndtv.com/zte-zmax-2-2982",
            "askingPrice": 150
        }
    ]

