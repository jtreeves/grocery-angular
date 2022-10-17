import { Product } from '../interfaces/product.interface'
import { findProductById } from './find-product-by-id.utility'

export function calculateItemTotal(
    id: string,
    amount: number
): number {
    const product: Product = findProductById(id)
    const price: number = product.price
    const total: number = price * amount

    return total
}
