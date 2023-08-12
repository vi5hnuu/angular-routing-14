import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct, ProductResolved} from "../product";
import {Subscription} from "rxjs";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:IProduct|null|undefined;
  errorMessage:string|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    const rdata:ProductResolved=this.route.snapshot.data['resolvedData']
    this.product=rdata.product;
    this.errorMessage=rdata.error;
  }
}
