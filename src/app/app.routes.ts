import { Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from '../components/cart/cart.component';

export const routes: Routes = [
  {path: "", component:UserComponent},
  {path: "products", component:ProductComponent},
  {path: "cart", component:CartComponent}
];
