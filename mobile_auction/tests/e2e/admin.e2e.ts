/// <reference path="../../typings/index.d.ts"/>

class AdminPage{
    auctionsButton: any;
    productAuctionsButton: any;

    constructor(){
        this.auctionsButton =  element.all(by.id('auctions'));
        this.productAuctionsButton =  element.all(by.id('productAuctions'));
    }
};

describe("Mobile Auction", () => {

    describe("Start Page", () => {
        beforeEach(() => {
            browser.get("");
        });

        it("should load the start page.", () => {
            expect(browser.getTitle()).toBe("Mobile Auction");
            expect(element(by.css(".text-center.m-t-lg h2")).getText()).toBe("Welcome to the Mobile Auction App");
        });

        it("should load all auctions.", () => {
            let auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(3);
        });

        it("should navigate to the auction market.", () => {
            let auctions = element.all(by.css(".auction-tile"));
            auctions.first().click();
            expect(browser.getCurrentUrl()).toContain("/auction-market/iPhoneAuctions");
        });
    });

    describe("Admin component", () => {
        beforeEach(() => {
            browser.get("/admin/auctions");
        });

        it("should load all auctions.", () => {
            browser.sleep(3000);
            let auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(3);
        });

        it("should load all product auctions.", () => {
            let page = new AdminPage();
            page.productAuctionsButton.click();
            let productAuctions = element.all(by.css(".auction-tile"));
            expect(productAuctions.count()).toEqual(16);
        });

        it("should load new product auction page.", () => {
            let page = new AdminPage();
            page.productAuctionsButton.click();

            let newButton = element.all(by.id('newButton'));
            newButton.click();

            expect(element(by.css(".product-container .row h2")).getText()).toBe("Product Title*");
        });

        it("should create a new auction.", () => {
            let page = new AdminPage();
            let newButton = element.all(by.id('newButton'));
            newButton.click();

            let productAuctions = element.all(by.css(".clickable")),
                nameInput = element.all(by.id('auction-name')),
                titleInput = element.all(by.id('auction-title')),
                saveButton = element.all(by.id('saveButton'));

            nameInput.sendKeys("SmartphoneAuctionClone");
            titleInput.sendKeys("Smartphone Auction Clone");

            productAuctions.click();
            saveButton.click();

            browser.sleep(5000);
            let auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(4);
        });
    });

});
