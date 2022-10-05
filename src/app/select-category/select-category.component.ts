import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Category } from '../interfaces/category.interface'
import { categories as categoriesData } from '../data/categories.data'

@Component({
    selector: 'app-select-category',
    templateUrl: './select-category.component.html',
    styleUrls: ['./select-category.component.css']
})

export class SelectCategoryComponent {
    @Input() selectedCategory: Category = categoriesData[0]
    @Output() updateCategory = new EventEmitter<string>()

    currentCategory: FormControl<string | null> = new FormControl(this.selectedCategory.name)
    categories: Category[] = categoriesData

    handleCategory(): void {
        this.updateCategory.emit(String(this.currentCategory.value))
    }
}
