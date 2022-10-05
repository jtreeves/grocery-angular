import { ProductTally } from './interfaces/product-tally.interface'

export class Items {
    items!: ProductTally[]

    constructor(initialState: ProductTally[]) {
        this.items = initialState
    }
}
