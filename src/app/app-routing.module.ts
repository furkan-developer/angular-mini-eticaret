import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Create routing shema
const routers: Routes = [
  {path:"", component: HomeComponent},
  {path:"productlist", component: ProductlistComponent},
  {path:"productlist/:id", component: ProductDetailComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    // Passed routing shema to Angular RouterModule
    RouterModule.forRoot(routers)
  ],
  // Exported RouterModule for other module
  exports: [RouterModule]
})
export class AppRoutingModule { }
