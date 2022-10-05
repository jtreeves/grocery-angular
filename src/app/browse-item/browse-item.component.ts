import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CartService } from '../services/cart.service'
import { StockService } from '../services/stock.service'

@Component({
    selector: 'app-browse-item',
    templateUrl: './browse-item.component.html',
    styleUrls: ['./browse-item.component.css']
})

export class BrowseItemComponent {
    @Input() id!: string
    @Input() stockTally!: number
    @Output() checkServices = new EventEmitter()

    constructor(
        private cartService: CartService,
        private stockService: StockService
    ) {}
    
    addProductToCart(): void {
        this.cartService.addProduct(this.id)
        this.stockService.removeProduct(this.id)
        this.checkServices.emit()
    }
}
