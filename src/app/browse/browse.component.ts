import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { StockService } from './../services/stock.service'
import { Category } from '../interfaces/category.interface'
import { ProductTally } from '../interfaces/product-tally.interface'
import { categories } from '../data/categories.data'
import { findCategoryByName } from '../utilities/find-category-by-name.utility'
import { findProductTalliesByCategory } from '../utilities/find-product-tallies-by-category.utility'

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BrowseComponent implements OnInit {
    category!: Category
    products!: ProductTally[]

    constructor(private stockService: StockService) {}

    ngOnInit(): void {
        this.category = categories[0]
        this.products = findProductTalliesByCategory(this.category, this.stockService.state.items)

        this.stockService.state$.subscribe(state => {
            this.products = findProductTalliesByCategory(this.category, state.items)
        })
    }

    handleCategory(categoryName: string): void {
        const updatedCategory: Category = findCategoryByName(categoryName)

        this.category = updatedCategory
        this.products = findProductTalliesByCategory(updatedCategory, this.stockService.state.items)
    }
}
