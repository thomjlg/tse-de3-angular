import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'user', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
