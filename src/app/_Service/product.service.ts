import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_Model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl + 'products');
}

getProduct(id): Observable<Product> {
  return this.http.get<Product>(this.baseUrl + 'products/' + id);
}
}
