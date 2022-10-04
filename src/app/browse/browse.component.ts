import { Component } from '@angular/core'
import { ProductTally } from '../interfaces/product-tally.interface'
import { createInitialStock } from '../utilities/create-initial-stock.utility'

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})

export class BrowseComponent {
    products: ProductTally[] = createInitialStock()
}
