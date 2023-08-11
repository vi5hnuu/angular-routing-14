import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../product";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {
  products:IProduct[]=[]
  showImage:boolean=true;
  private _listFilter:string='';
  filteredProducts:IProduct[]=[]
  errorMessage:any;
  loading:boolean=false
  productSubs:Subscription|undefined

  get listFilter(){
    return this._listFilter;
  }
  set listFilter(filterStr:string){
    this._listFilter = filterStr;
    this.filteredProducts=this.performFilter(this.listFilter)
  }
  constructor(private _productService:ProductService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.listFilter=this.activatedRoute.snapshot.queryParamMap.get('filterBy') || this.listFilter;
    this.showImage=Boolean(this.activatedRoute.snapshot.queryParamMap.get('showImage')) || this.showImage

    ///
    this.loading = true;
    this.productSubs=this._productService.getProducts().subscribe({
      next:(products:IProduct[])=>{
        this.errorMessage=null;
        this.products = products;
        this.filteredProducts=this.performFilter(this.listFilter);
        this.loading=false;
      },
      error:(err)=>{
        this.errorMessage=err;
        this.loading=false;
      },
    });
  }
  ngOnDestroy() {
    this.productSubs?.unsubscribe()
  }

  performFilter(filterStr:string):IProduct[]{
    return this.products.filter((product:IProduct)=>product.productName.toLowerCase().includes(filterStr.toLowerCase()))
  }
  toggleShowImage(){
    this.showImage=!this.showImage;
  }

  protected readonly console = console;
}
