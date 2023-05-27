import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';

const routes: Routes = [

  {
    path:"",
    component: ProductCategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule { }
