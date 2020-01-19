import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [CartComponent, CheckoutComponent, MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class StoreModule { }
