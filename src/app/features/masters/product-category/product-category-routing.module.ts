import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';
import { ProductCategoryEditorComponent } from './pages/product-category-editor/product-category-editor.component';

const routes: Routes = [

  {
    path:"",
    component: ProductCategoryListComponent
  },
  {
    path:"create",
    component: ProductCategoryEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule { }
