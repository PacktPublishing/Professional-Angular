/// <reference path="../../typings/index.d.ts"/>
var AdminPage = (function () {
    function AdminPage() {
        this.auctionsButton = element.all(by.id('auctions'));
        this.productAuctionsButton = element.all(by.id('productAuctions'));
    }
    return AdminPage;
}());
;
describe("Mobile Auction", function () {
    describe("Start Page", function () {
        beforeEach(function () {
            browser.get("");
        });
        it("should load the start page.", function () {
            expect(browser.getTitle()).toBe("Mobile Auction");
            expect(element(by.css(".text-center.m-t-lg h2")).getText()).toBe("Welcome to the Mobile Auction App");
        });
        it("should load all auctions.", function () {
            var auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(3);
        });
        it("should navigate to the auction market.", function () {
            var auctions = element.all(by.css(".auction-tile"));
            auctions.first().click();
            expect(browser.getCurrentUrl()).toContain("/auction-market/iPhoneAuctions");
        });
    });
    describe("Admin component", function () {
        beforeEach(function () {
            browser.get("/admin/auctions");
        });
        it("should load all auctions.", function () {
            browser.sleep(3000);
            var auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(3);
        });
        it("should load all product auctions.", function () {
            var page = new AdminPage();
            page.productAuctionsButton.click();
            var productAuctions = element.all(by.css(".auction-tile"));
            expect(productAuctions.count()).toEqual(16);
        });
        it("should load new product auction page.", function () {
            var page = new AdminPage();
            page.productAuctionsButton.click();
            var newButton = element.all(by.id('newButton'));
            newButton.click();
            expect(element(by.css(".product-container .row h2")).getText()).toBe("Product Title*");
        });
        it("should create a new auction.", function () {
            var page = new AdminPage();
            var newButton = element.all(by.id('newButton'));
            newButton.click();
            var productAuctions = element.all(by.css(".clickable")), nameInput = element.all(by.id('auction-name')), titleInput = element.all(by.id('auction-title')), saveButton = element.all(by.id('saveButton'));
            nameInput.sendKeys("SmartphoneAuctionClone");
            titleInput.sendKeys("Smartphone Auction Clone");
            productAuctions.click();
            saveButton.click();
            browser.sleep(5000);
            var auctions = element.all(by.css(".auction-tile"));
            expect(auctions.count()).toEqual(4);
        });
    });
});
