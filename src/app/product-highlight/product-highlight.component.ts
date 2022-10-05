import { 
    Component, 
    Input, 
    OnInit
} from '@angular/core'
import { findProductById } from '../utilities/find-product-by-id.utility'
import { formatCurrency } from '../utilities/format-currency.utility'
import { Product } from '../interfaces/product.interface'
import { Router } from '@angular/router'
import { StockService } from '../services/stock.service'
import { CartService } from '../services/cart.service'

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
        this.checkServices()
        
        this.product = findProductById(this.id)
        this.name = this.product.name
        this.image = this.product.image
        this.price = formatCurrency(this.product.price)
        this.path = this.route.url
        this.isBrowse = this.path.includes('browse')
        this.isCart = this.path.includes('cart')
    }

    checkServices(): void {
        const foundStock = this.stockService.findProduct(this.id)
        const foundCart = this.cartService.findProduct(this.id)

        this.stockTally = foundStock ? foundStock.tally : 0
        this.cartTally = foundCart ? foundCart.tally : 0
    }
}
