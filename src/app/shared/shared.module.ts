import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {RatingStarComponent} from "./rating-star/rating-star.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingStarComponent
  ],
  exports: [
    RatingStarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
