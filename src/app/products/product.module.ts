import { NgModule } from '@angular/core';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from "@angular/router";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductEditTagsComponent} from "./product-edit/product-edit-tags.component";
import {ProductEditInfoComponent} from "./product-edit/product-edit-info.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ProductRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent,
  ]
})
export class ProductModule { }
