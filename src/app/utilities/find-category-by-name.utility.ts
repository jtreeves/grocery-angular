import { Category } from '../interfaces/category.interface'
import { categories } from '../data/categories.data'

export function findCategoryByName(
    name: string
): Category {
    const foundCategories: Category[] = categories.filter((
        category: Category
    ): boolean => {
        return category.name === name
    })

    const foundCategory: Category = foundCategories[0]

    return foundCategory
}
