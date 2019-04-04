import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ShirtsComponent } from './Shirts/Shirts.component';
import { PantsComponent } from './Pants/Pants.component';
import { ShoesComponent } from './Shoes/Shoes.component';
import { DealsComponent } from './Deals/Deals.component';
import { AuthGuard } from './_Guard/Auth.Guard';
import { ProductListComponent} from './Products/ProductList/ProductList.component';
import { ProductDetailComponent } from './Products/ProductDetail/ProductDetail.component';
import { ProductDetailResolver } from './_Resolvers/ProductDetailResolver';
import { ProductListResolver } from './_Resolvers/ProductListResolver';

// export const AppRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'Product', component: ProductListComponent, canActivate: [AuthGuard]},
//   {path: 'Product/:id', component: ProductDetailComponent},
//   {path: 'Deals', component: DealsComponent, canActivate: [AuthGuard]},
//   {path: 'Shirts', component: ShirtsComponent},
//   {path: 'Pants', component: PantsComponent},

// tslint:disable-next-line: whitespace


export const AppRoutes: Routes = [

    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
          { path: 'Product', component: ProductListComponent, resolve: {products: ProductListResolver}},
          { path: 'Product/:id', component: ProductDetailComponent, resolve: {product: ProductDetailResolver}},
          { path: 'Deals', component: DealsComponent},
          { path: 'Shirts', component: ShirtsComponent},
          { path: 'Pants', component: PantsComponent},
          { path: 'Shoes', component: ShoesComponent}
        ]
    },

  { path: '**', redirectTo: '', pathMatch: 'full'},
];
