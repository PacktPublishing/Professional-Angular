export class Product {
    constructor(
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
        public productAuctions: ProductAuction[]
    ){}
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