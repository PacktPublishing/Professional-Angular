export class Product {
    constructor(
        public name: string,
        public title: string,
        public image: string,
        public description: string,
        public specLink: string,
        public askingPrice: number,
        public sellingPrice: number
    ){}
}

export class ProductAuction {
    constructor(
        public product: Product,
        public duration: number
    ){}
}

export class Auction {
    constructor(
        public name: string,
        public title: string,
        public productAuctions: ProductAuction[]
    ){}

    totalAuctionDuration(): number {
        let total = this.productAuctions.map((pa) => pa.duration).reduce((previous, current) => previous + current);

        return total;;
    }
}

export class User {
    constructor(
        public name: string
    ){}
}

export class Bid {
    constructor(
        public amount: number,
        public productTitle: string,
        public user: User
    ){}
}

export class ErrorMessages {
    constructor(
        public userError: string,
        public bidError: string
    ){}
}

export class AuctionResult{
    constructor(
        public sold: Array<Object>
    ) {}
}