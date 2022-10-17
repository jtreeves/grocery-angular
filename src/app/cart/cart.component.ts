import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from '../services/cart.service'
import { ProductTally } from '../interfaces/product-tally.interface'
import { calculateTotal } from '../utilities/calculate-total.utility'
import { formatCurrency } from '../utilities/format-currency.utility'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class CartComponent implements OnInit {
    products!: ProductTally[]
    total!: number
    formattedTotal!: string

    constructor(
        private cartService: CartService,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.products = this.cartService.state.items
        this.total = calculateTotal(this.products)
        this.formattedTotal = formatCurrency(this.total)
        
        this.cartService.state$.subscribe(state => {
            this.products = state.items
            this.total = calculateTotal(this.products)
            this.formattedTotal = formatCurrency(this.total)
        })
    }

    handleCheckout(): void {
        this.cartService.reset()
        this.route.navigate(['/home'])
    }
}
