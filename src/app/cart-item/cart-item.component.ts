import { Component, Input, OnInit } from '@angular/core'
import { CartService } from '../services/cart.service'
import { StockService } from '../services/stock.service'
import { calculateItemTotal } from '../utilities/calculate-item-total.utility'
import { formatCurrency } from '../utilities/format-currency.utility'

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {
    @Input() id!: string
    @Input() stockTally!: number
    @Input() cartTally!: number

    formattedTotal!: string
    topText!: string
    topHover!: string
    downHover!: string
    topClass!: string
    topFunction!: () => void

    constructor(
        private cartService: CartService,
        private stockService: StockService
    ) {}

    ngOnInit(): void {
        const total: number = calculateItemTotal(this.id, this.cartTally)

        this.formattedTotal = formatCurrency(total)
        this.topText = this.stockTally > 0 ? '+' : 'x'
        this.topHover = this.stockTally > 0 ? 'INCREASE QUANTITY' : 'OUT OF STOCK'
        this.downHover = this.cartTally === 1 ? 'DELETE FROM CART' : 'DECREASE QUANTITY'
        this.topClass = this.stockTally > 0 ? '' : 'muted-button'
        this.topFunction = this.stockTally > 0 ? this.addProductToCart : () => {}
    }

    addProductToCart(): void {
        this.cartService.addProduct(this.id)
        this.stockService.removeProduct(this.id)
    }

    removeProductFromCart(): void {
        this.cartService.removeProduct(this.id)
        this.stockService.addProduct(this.id)
    }
}
