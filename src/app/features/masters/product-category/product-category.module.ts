import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';


@NgModule({
  declarations: [
    ProductCategoryListComponent
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule
  ]
})
export class ProductCategoryModule { }
