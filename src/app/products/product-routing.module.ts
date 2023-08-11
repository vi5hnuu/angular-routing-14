import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductResolver} from "./product.resolver";

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent, resolve: {resolvedDate: ProductResolver}},
  {path: 'products/:id/edit', component: ProductEditComponent},
  {path: 'products/:id/add', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductRoutingModule {
}
