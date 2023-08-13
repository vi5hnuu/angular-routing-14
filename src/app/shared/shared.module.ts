import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {RatingStarComponent} from "./rating-star/rating-star.component";
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingStarComponent,
    SpinnerComponent
  ],
    exports: [
        RatingStarComponent,
        CommonModule,
        FormsModule,
        SpinnerComponent
    ]
})
export class SharedModule { }
