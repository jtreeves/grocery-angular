import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { categories } from '../data/categories.data'
import { Category } from '../interfaces/category.interface'
import { ProductTally } from '../interfaces/product-tally.interface'
import { StockService } from './../services/stock.service'

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
    category: Category = categories[0]
    products: ProductTally[] = []

    constructor(private stockService: StockService) {}

    ngOnInit(): void {
        this.products = this.stockService.getValue()
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     if (changes.category)
    // }
}
