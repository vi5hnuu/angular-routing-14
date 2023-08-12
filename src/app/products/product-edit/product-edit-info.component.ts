import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {IProduct, ProductResolved} from "../product";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './product-edit-info.component.html',
  styleUrls:['product-edit-info.component.scss']
})
export class ProductEditInfoComponent implements OnInit,OnDestroy {
  product:IProduct|null=null
  prodSub:Subscription|undefined
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prodSub=this.route.parent?.data.subscribe(data=>{
      const rdata:ProductResolved=data['resolvedData'];
      this.product=rdata.product;
    })
  }
  ngOnDestroy() {
    this.prodSub?.unsubscribe()
  }
}
