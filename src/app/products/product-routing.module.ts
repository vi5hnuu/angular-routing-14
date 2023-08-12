import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductResolver} from "./product.resolver";
import * as path from "path";
import {ProductEditInfoComponent} from "./product-edit/product-edit-info.component";
import {ProductEditTagsComponent} from "./product-edit/product-edit-tags.component";

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent, resolve: {resolvedData: ProductResolver}},
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: {resolvedData: ProductResolver},
    children: [
      {path: '', redirectTo: 'info', pathMatch: 'full'},
      {path: 'info', component: ProductEditInfoComponent},
      {path: 'tags', component: ProductEditTagsComponent},
    ]
  },
  {
    path: 'products/:id/add',
    component: ProductEditComponent,
    resolve: {
      resolvedData: ProductResolver,
    },
    children: [
      {path: '', redirectTo: 'info', pathMatch: 'full'},
      {path: 'info', component: ProductEditInfoComponent},
      {path: 'tags', component: ProductEditTagsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProductRoutingModule {
}
