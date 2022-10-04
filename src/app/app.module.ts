import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CartComponent } from './cart/cart.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { ProductHighlightComponent } from './product-highlight/product-highlight.component'
import { ProductsListComponent } from './products-list/products-list.component';
import { BrowseItemComponent } from './browse-item/browse-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { BrowseComponent } from './browse/browse.component'

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        ProductHighlightComponent,
        ProductsListComponent,
        BrowseItemComponent,
        CartItemComponent,
        SelectCategoryComponent,
        BrowseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
