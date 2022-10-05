import { Component } from '@angular/core'
import { StockService } from './../services/stock.service'
import { Category } from '../interfaces/category.interface'
import { ProductTally } from '../interfaces/product-tally.interface'
import { categories } from '../data/categories.data'
import { findCategoryByName } from '../utilities/find-category-by-name.utility'
import { findProductTalliesByCategory } from '../utilities/find-product-tallies-by-category.utility'

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})

export class BrowseComponent {
    category: Category = categories[0]
    products: ProductTally[] = this.stockService.value

    constructor(private stockService: StockService) {}

    handleChange(newCategoryName: string): void {
        const updatedCategory = findCategoryByName(newCategoryName)

        this.category = updatedCategory
        this.products = findProductTalliesByCategory(updatedCategory, this.stockService.value)
    }
}
