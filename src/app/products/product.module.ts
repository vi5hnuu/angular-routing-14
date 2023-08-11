import { NgModule } from '@angular/core';

import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from "@angular/router";
import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
  ]
})
export class ProductModule { }
