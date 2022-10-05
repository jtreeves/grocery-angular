import { Injectable } from '@angular/core'
import { Store } from '../store'
import { Items } from '../items'
import { ProductTally } from '../interfaces/product-tally.interface'
import { findProductInCollection } from '../utilities/find-product-in-collection.utility'
import { updateProductTally } from '../utilities/update-product-tally.utility'

@Injectable({
    providedIn: 'root'
})

export class CartService extends Store<Items> {
    constructor() {
        super(new Items([]))
    }

    findProduct(id: string): ProductTally {
        return findProductInCollection(id, this.state.items)
    }

    addProduct(id: string): void {
        if(!this.findProduct(id)) {
            this.setState({
                items: [
                    ...this.state.items,
                    {
                        id: id,
                        tally: 1
                    }
                ]
            })
        } else {
            this.setState({
                ...this.state,
                items: updateProductTally(id, true, this.state.items)
            })
        }
    }

    removeProduct(id: string): void {
        this.setState({
            ...this.state,
            items: updateProductTally(id, false, this.state.items)
        })
    }

    reset(): void {
        this.setState({
            items: []
        })
    }
}
