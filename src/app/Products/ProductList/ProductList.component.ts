import { Component, OnInit } from '@angular/core';
import { Product } from '../../_Model/Product';
import { ProductService } from '../../_Service/product.service';
import { AlertifyService } from '../../_Service/Alertify.service';
import { ProductImages } from 'src/app/_Model/ProductImages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];


  constructor(private prodService: ProductService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
            this.products = data['products'];
          });
  }

  // loadProducts() {
  //   this.prodService.getProducts().subscribe((product: Product[]) => {
  //     this.products = product;
  //   }, error => {
  //     this.alertify.error('error');
  //   });
  // }

}

