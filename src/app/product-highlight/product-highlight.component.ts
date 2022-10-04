import { Component, Input } from '@angular/core'
import { findProductById } from '../utilities/findProductById.utility'
import { formatCurrency } from '../utilities/formatCurrency.utility'

@Component({
    selector: 'app-product-highlight',
    templateUrl: './product-highlight.component.html',
    styleUrls: ['./product-highlight.component.css']
})

export class ProductHighlightComponent {
    @Input() id: string = ''
    product = findProductById(this.id)
    formatCurrency()
}
