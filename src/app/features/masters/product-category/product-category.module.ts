import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModuleModule } from './../../../common/common-module/common-module.module'
import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';
import { ProductCategoryEditorComponent } from './pages/product-category-editor/product-category-editor.component';

@NgModule({
  declarations: [
    ProductCategoryListComponent,
    ProductCategoryEditorComponent
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    CommonModuleModule
  ]
})
export class ProductCategoryModule { }
