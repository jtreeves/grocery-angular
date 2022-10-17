import { Component, Input, OnInit } from '@angular/core'
import { CartService } from '../services/cart.service'
import { StockService } from '../services/stock.service'

@Component({
    selector: 'app-browse-item',
    templateUrl: './browse-item.component.html',
    styleUrls: ['./browse-item.component.css']
})

export class BrowseItemComponent implements OnInit {
    @Input() id!: string
    @Input() stockTally!: number

    buttonText!: string
    buttonHover!: string
    buttonClass!: string
    buttonFunction!: () => void

    constructor(
        private cartService: CartService,
        private stockService: StockService
    ) {}

    ngOnInit(): void {
        this.buttonText = this.stockTally > 0 ? '+' : 'x'
        this.buttonHover = this.stockTally > 0 ? 'ADD TO CART' : 'OUT OF STOCK'
        this.buttonClass = this.stockTally > 0 ? '' : 'muted-button'
        this.buttonFunction = this.stockTally > 0 ? this.addProductToCart : () => {}
    }
    
    addProductToCart(): void {
        this.cartService.addProduct(this.id)
        this.stockService.removeProduct(this.id)
    }
}
