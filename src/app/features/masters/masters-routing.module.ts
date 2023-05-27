import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { LayoutAppComponent } from 'src/app/shared/layout/pages/layout-app/layout-app.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';

const routes: Routes = [
  {
    path:"",
    component: MastersComponent,
    children:[
      {
        path:"ppr",
        component: MasterLayoutComponent
      },
      {
        path:"productCategory",
        loadChildren:()=> import("../../features/masters/product-category/product-category.module").then((m)=> m.ProductCategoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
