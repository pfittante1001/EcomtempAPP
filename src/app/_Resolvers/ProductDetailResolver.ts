import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../_Model/Product';
import { ProductService } from '../_Service/product.service';
import { AlertifyService } from '../_Service/Alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductDetailResolver implements Resolve<Product>{
  constructor(private productServices: ProductService, private router: Router,
              private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product>{
// tslint:disable-next-line: no-string-literal
    return this.productServices.getProduct(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/products']);
        return of(null);
      })
    );
  }
}
