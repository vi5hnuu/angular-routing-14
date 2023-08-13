import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IProduct, ProductResolved} from "./product";
import {ProductService} from "./product.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {
  constructor(private productService:ProductService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id= Number(route.paramMap.get('id'));
    if(isNaN(id)){
      return of({product:null,error:'Product does not exist.'});
    }
    return this.productService.getProduct(id).pipe(
      map(product=>({product,error:!product ? 'Product does not exist' : null})),
      catchError(err=>{
        return of({product:null,error:err})
      })
    )
  }
}
