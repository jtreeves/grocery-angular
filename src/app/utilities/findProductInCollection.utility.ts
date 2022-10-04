import { ProductTally } from '../interfaces/product-tally.interface'

export function findProductInCollection(
    id: string,
    collection: ProductTally[]
): ProductTally {
    const initialProducts: ProductTally[] = collection.filter((
        collectedProduct: ProductTally
    ): boolean => {
        return collectedProduct.id === id
    })

    const foundProduct: ProductTally = initialProducts[0]

    return foundProduct
}
