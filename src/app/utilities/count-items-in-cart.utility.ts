import { ProductTally } from '../interfaces/product-tally.interface'

export function countItemsInCart(
    cart: ProductTally[]
): number {
    let total: number = 0

    cart.forEach(item => {
        total += item.tally
    })

    return total
}
