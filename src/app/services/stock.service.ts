import { Injectable } from '@angular/core'
import { ProductTally } from '../interfaces/product-tally.interface'
import { createInitialStock } from '../utilities/create-initial-stock.utility'
import { findProductInCollection } from '../utilities/find-product-in-collection.utility'
import { updateProductTally } from '../utilities/update-product-tally.utility'

@Injectable({
    providedIn: 'root'
})

export class StockService {
    value: ProductTally[] = createInitialStock()

    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.value)
    }

    addProduct(id: string): void {
        this.value = updateProductTally(id, true, this.value)
    }

    removeProduct(id: string): void {
        this.value = updateProductTally(id, false, this.value)
    }

    reset(): void {
        this.value = createInitialStock()
    }
}
