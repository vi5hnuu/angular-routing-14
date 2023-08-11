import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../product";
import {Subscription} from "rxjs";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit,OnDestroy {
  product:IProduct|undefined;
  prodSub:Subscription|undefined;
  loading:boolean=false;
  errorMessage:string|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.getProduct(id)
  }
  getProduct(id:number){
    this.prodSub=this.productService.getProduct(id).subscribe({
      next:(product)=>{
        this.product=product;
        this.loading=false;
        this.errorMessage=undefined;
      },
      error:(err:string)=>{
        this.loading=false;
        this.errorMessage=err
      }
    })
  }
  ngOnDestroy() {
    this.prodSub?.unsubscribe()
  }
}
