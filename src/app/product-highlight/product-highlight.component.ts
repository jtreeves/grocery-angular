import { 
    Component, 
    Input, 
    OnInit
} from '@angular/core'
import { findProductById } from '../utilities/find-product-by-id.utility'
import { formatCurrency } from '../utilities/format-currency.utility'
import { Product } from '../interfaces/product.interface'
import { products } from '../data/products.data'

@Component({
    selector: 'app-product-highlight',
    templateUrl: './product-highlight.component.html',
    styleUrls: ['./product-highlight.component.css']
})

export class ProductHighlightComponent implements OnInit {
    @Input() id: string = ''
    product: Product = products[0]
    name = ''
    image = ''
    price = ''
    
    constructor() {
    }
    
    ngOnInit(): void {
        this.product = findProductById(this.id)
        this.name = this.product.name
        this.image = this.product.image
        this.price = formatCurrency(this.product.price)
    }
}
