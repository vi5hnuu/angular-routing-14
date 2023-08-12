import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {IProduct, ProductResolved} from "../product";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

/**
 * @title Chips with input
 */
@Component({
  templateUrl: 'product-edit-tags.component.html',
  styleUrls: ['product-edit-tags.component.scss'],
})
export class ProductEditTagsComponent implements OnInit,OnDestroy {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  product: IProduct | null = null;
  prodSub:Subscription|undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.prodSub=this.route.parent?.data.subscribe(data=>{
      const rdata:ProductResolved=data['resolvedData']
      this.product=rdata.product;
    });
  }
  ngOnDestroy() {
    this.prodSub?.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.product?.tags.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag:string): void {
    const index = this.product?.tags.indexOf(tag);

    if (index && index >= 0) {
      this.product?.tags.splice(index, 1);
    }
  }
}
