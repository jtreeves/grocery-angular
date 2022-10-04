import { Product } from '../interfaces/product.interface'
import { products } from '../data/products.data'

export function listAllProductIds(): string[] {
    const allProductIds: string[] = products.map((
        product: Product
    ): string => {
        return product.id
    })

    return allProductIds
}
