import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [LoginComponent, ProductsComponent, OrdersComponent, AddProductComponent, EditProductComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
