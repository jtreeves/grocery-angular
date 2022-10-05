import { Component, Input } from '@angular/core'
import { ProductTally } from '../interfaces/product-tally.interface'

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
    @Input() products!: ProductTally[]
}
