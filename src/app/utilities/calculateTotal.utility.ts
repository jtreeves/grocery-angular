import { ProductTally } from '../interfaces/product-tally.interface'
import { Product } from '../interfaces/product.interface'
import { findProductById } from './findProductById.utility'

export function calculateTotal(
    products: ProductTally[]
): number {
    let total: number = 0

    products.forEach((
        product: ProductTally
    ): void => {
        const fullProduct: Product = findProductById(product.id)
        const price: number = fullProduct.price
        const tally: number = product.tally

        total += price * tally
    })

    return total
}
