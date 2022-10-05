import { Injectable } from '@angular/core'
import { ProductTally } from '../interfaces/product-tally.interface'
import { findProductInCollection } from '../utilities/find-product-in-collection.utility'
import { updateProductTally } from '../utilities/update-product-tally.utility'

@Injectable({
    providedIn: 'root'
})

export class CartService {
    value: ProductTally[] = []

    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.value)
    }

    addProduct(id: string): void {
        if (!this.findProduct(id)) {
            this.value.push({
                id: id,
                tally: 1
            })
        } else {
            this.value = updateProductTally(id, true, this.value)
        }
    }

    removeProduct(id: string): void {
        this.value = updateProductTally(id, false, this.value)
    }

    reset(): void {
        this.value = []
    }
}
