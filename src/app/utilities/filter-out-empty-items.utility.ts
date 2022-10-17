import { ProductTally } from '../interfaces/product-tally.interface'

export function filterOutEmptyItems(
    items: ProductTally[]
): ProductTally[] {
    const nonZeroItems: ProductTally[] = items.filter((
        item: ProductTally
    ): boolean => {
        return item.tally !== 0
    })

    return nonZeroItems
}
