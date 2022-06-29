import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListSecondComponent } from './product-list-second/product-list-second.component';
import { ProductListThirdComponent } from './product-list-third/product-list-third.component';
import { ProductListVfourthComponent } from './product-list-vfourth/product-list-vfourth.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductItemComponent },
      { path: 'products/:productId', component: 
  ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'category', component: ProductListComponent},
    { path: 'category1', component: ProductListSecondComponent},
    { path: 'category2', component: ProductListThirdComponent},
    { path: 'category3', component: ProductListVfourthComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductItemComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductListComponent,
    ProductListSecondComponent,
    ProductListThirdComponent,
    ProductListVfourthComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/