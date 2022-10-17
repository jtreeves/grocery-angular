import { Component, OnInit } from '@angular/core'
import { ProductTally } from '../interfaces/product-tally.interface'
import { CartService } from '../services/cart.service'
import { countItemsInCart } from '../utilities/count-items-in-cart.utility'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    products!: ProductTally[]
    currentCount!: number

    constructor(
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.products = this.cartService.state.items
        this.currentCount = countItemsInCart(this.products)
        
        this.cartService.state$.subscribe(state => {
            this.products = state.items
            this.currentCount = countItemsInCart(this.products)
        })
    }
}
