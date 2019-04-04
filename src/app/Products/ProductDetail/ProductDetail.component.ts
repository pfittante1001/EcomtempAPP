import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Service/product.service';
import { AlertifyService } from 'src/app/_Service/Alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-ProductDetail',
  templateUrl: './ProductDetail.component.html',
  styleUrls: ['./ProductDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: Product;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private productService: ProductService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
// tslint:disable-next-line: no-string-literal
      this.product = data['product'];
    });

    this.galleryOptions = [
    {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }
  ];
    this.galleryImages = this.getImages();
 }

 getImages() {
   const imageUrls = [];
// tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < this.product.productImages.length ; i++) {
      imageUrls.push({
      small: this.product.productImages[i].imgUrl,
      medium: this.product.productImages[i].imgUrl,
      large: this.product.productImages[i].imgUrl
     });
   }
   return imageUrls;
 }
}
