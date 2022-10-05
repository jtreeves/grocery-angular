import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { BrowseComponent } from './browse/browse.component'
import { CartComponent } from './cart/cart.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SelectCategoryComponent } from './select-category/select-category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductHighlightComponent } from './product-highlight/product-highlight.component'
import { BrowseItemComponent } from './browse-item/browse-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms'

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
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
