import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsComponent } from './Deals/Deals.component';
import { HomeComponent } from './Home/Home.component';
import { NavComponent } from './Nav/Nav.component';
import { PantsComponent } from './Pants/Pants.component';
import { ShirtsComponent } from './Shirts/Shirts.component';
import { ShoesComponent } from './Shoes/Shoes.component';
import { RegisterComponent } from './Register/Register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './_Service/Auth.service';
import { ErrorInterceptorProvider } from './_Service/Error.Interceptor';
import { AlertifyService } from './_Service/Alertify.service';
import { AuthGuard } from './_Guard/Auth.Guard';
import { AppRoutes } from './Routes';
import { ProductService } from './_Service/product.service';
import { ProductListComponent } from './Products/ProductList/ProductList.component';
import { ProductCardComponent } from './Products/ProductCard/ProductCard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductDetailComponent } from './Products/ProductDetail/ProductDetail.component';
import { ProductDetailResolver } from './_Resolvers/ProductDetailResolver';
import { ProductListResolver } from './_Resolvers/ProductListResolver';
import { NgxGalleryModule } from 'ngx-gallery';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      DealsComponent,
      HomeComponent,
      NavComponent,
      PantsComponent,
      ShirtsComponent,
      ShoesComponent,
      RegisterComponent,
      ProductListComponent,
      ProductCardComponent,
      ProductDetailComponent
       ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      RouterModule.forRoot(AppRoutes),
      TabsModule.forRoot(),
      NgxGalleryModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      ProductService,
      ProductDetailResolver,
      ProductListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
