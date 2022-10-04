import { ProductTally } from '../interfaces/product-tally.interface'
import { Product } from '../interfaces/product.interface'
import { products } from '../data/products.data'

export function createInitialStock(): ProductTally[] {
    const initialStock: ProductTally[] = products.map((
        product: Product
    ): ProductTally => {
        return {
            id: product.id,
            tally: Math.floor(Math.random() * 20)
        }
    })

    return initialStock
}
