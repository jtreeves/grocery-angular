import { Injectable } from '@angular/core'
import { Store } from '../store'
import { Items } from '../items'
import { ProductTally } from '../interfaces/product-tally.interface'
import { createInitialStock } from '../utilities/create-initial-stock.utility'
import { findProductInCollection } from '../utilities/find-product-in-collection.utility'
import { updateProductTally } from '../utilities/update-product-tally.utility'

@Injectable({
    providedIn: 'root'
})

export class StockService extends Store<Items> {
    constructor() {
        super(new Items(createInitialStock()))
    }

    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.state.items)
    }

    addProduct(id: string): void {
        this.setState({
            ...this.state,
            items: updateProductTally(
                id, true, this.state.items
            )
        })
    }

    removeProduct(id: string): void {
        this.setState({
            ...this.state,
            items: updateProductTally(
                id, false, this.state.items
            )
        })
    }

    reset(): void {
        this.setState({
            items: createInitialStock()
        })
    }
}
