import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoryResultsComponent } from './category-results/category-results.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductHighlightComponent } from './product-highlight/product-highlight.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryResultsComponent,
    CheckoutItemComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductHighlightComponent,
    ProductsListComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
