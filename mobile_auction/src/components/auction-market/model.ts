export class Product{
    constructor(
        public title: string,
        public image: string,
        public description: string,
        public price: number
    ){}
}

export class ProductAuction{
    constructor(
        public product: Product,
        public duration: number
    ){}
}

export class Auction{
    constructor(
        public productAuctions: ProductAuction[]
    ){}
}
