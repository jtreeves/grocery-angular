import { 
    Component, 
    Input, 
    OnInit
} from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from '../services/cart.service'
import { StockService } from '../services/stock.service'
import { Product } from '../interfaces/product.interface'
import { ProductTally } from '../interfaces/product-tally.interface'
import { findProductById } from '../utilities/find-product-by-id.utility'
import { formatCurrency } from '../utilities/format-currency.utility'

@Component({
    selector: 'app-product-highlight',
    templateUrl: './product-highlight.component.html',
    styleUrls: ['./product-highlight.component.css']
})

export class ProductHighlightComponent implements OnInit {
    @Input() id!: string

    product!: Product
    name!: string
    image!: string
    price!: string
    path!: string
    isBrowse!: boolean
    isCart!: boolean
    stockTally!: number
    cartTally!: number

    constructor(
        private route: Router,
        private stockService: StockService,
        private cartService: CartService
    ) {}
    
    ngOnInit(): void {
        const foundStock: ProductTally = this.stockService.findProduct(this.id)
        const foundCart: ProductTally = this.cartService.findProduct(this.id)

        this.product = findProductById(this.id)
        this.name = this.product.name
        this.image = this.product.image
        this.price = formatCurrency(this.product.price)
        this.path = this.route.url
        this.isBrowse = this.path.includes('browse')
        this.isCart = this.path.includes('cart')
        this.stockTally = foundStock ? foundStock.tally : 0
        this.cartTally = foundCart ? foundCart.tally : 0
    }
}
