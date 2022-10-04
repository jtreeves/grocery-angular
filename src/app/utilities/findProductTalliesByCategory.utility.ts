import { ProductTally } from '../interfaces/product-tally.interface'
import { Category } from '../interfaces/category.interface'
import { findProductInCollection } from './findProductInCollection.utility'

export function findProductTalliesByCategory(
    category: Category,
    collection: ProductTally[]
): ProductTally[] {
    const foundProducts: ProductTally[] = category.products.map((
        productId: string
    ): ProductTally => {
        return findProductInCollection(productId, collection)
    })

    return foundProducts
}
