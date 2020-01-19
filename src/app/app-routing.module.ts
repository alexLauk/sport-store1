import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './store/cart/cart.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductsComponent } from './admin/products/products.component';
import { AuthGuard } from './admin/auth.guard';
import { MainComponent } from './store/main/main.component';



const routes: Routes = [
  { path: '', component: MainComponent},
  {path: 'store', component: MainComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/'},

  /* {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'store'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
