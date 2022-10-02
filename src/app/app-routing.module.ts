import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CategoryResultsComponent } from './category-results/category-results.component'
import { CartComponent } from './cart/cart.component'
import { ReceiptComponent } from './receipt/receipt.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'results',
        component: CategoryResultsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'receipt',
        component: ReceiptComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
