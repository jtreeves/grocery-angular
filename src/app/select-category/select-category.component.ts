import { StockService } from './../services/stock.service';
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { categories as categoriesData } from '../data/categories.data'
import { Category } from '../interfaces/category.interface'
import { ProductTally } from '../interfaces/product-tally.interface'
import { findCategoryByName } from '../utilities/find-category-by-name.utility'
import { findProductTalliesByCategory } from '../utilities/find-product-tallies-by-category.utility'

@Component({
    selector: 'app-select-category',
    templateUrl: './select-category.component.html',
    styleUrls: ['./select-category.component.css']
})

export class SelectCategoryComponent {
    @Input() selectedCategory: Category = categoriesData[0]
    @Output() selectedCategoryChange = new EventEmitter<Category>()
    @Input() products!: ProductTally[]
    @Output() productsChange = new EventEmitter<ProductTally[]>()
    currentCategory: FormControl<string | null> = new FormControl(this.selectedCategory.name)
    categories: Category[] = categoriesData

    constructor(private stockService: StockService) {}

    handleCategory(): void {
        const newCategory: Category = findCategoryByName(String(this.currentCategory.value))
        this.selectedCategoryChange.emit(newCategory)
        this.productsChange.emit(findProductTalliesByCategory(newCategory, this.stockService.getValue()))
    }
}
