import { Component, Input } from '@angular/core'
import { CartService } from '../services/cart.service'
import { StockService } from '../services/stock.service'

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
    @Input() id!: string
    @Input() stockTally!: number
    @Input() cartTally!: number

    constructor(
        private cartService: CartService,
        private stockService: StockService
    ) {}

    addProductToCart(): void {
        this.cartService.addProduct(this.id)
        this.stockService.removeProduct(this.id)
    }

    removeProductFromCart(): void {
        this.cartService.removeProduct(this.id)
        this.stockService.addProduct(this.id)
    }
}
