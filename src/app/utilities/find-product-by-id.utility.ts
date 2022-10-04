import { Product } from '../interfaces/product.interface'
import { products } from '../data/products.data'

export function findProductById(
    id: string
): Product {
    const initialProducts: Product[] = products.filter((
        product: Product
    ): boolean => {
        return product.id === id
    })

    const foundProduct: Product = initialProducts[0]

    return foundProduct
}
