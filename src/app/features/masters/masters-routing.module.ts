import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { LayoutAppComponent } from 'src/app/shared/layout/pages/layout-app/layout-app.component';

const routes: Routes = [
  {
    path:"",
    component: MastersComponent,
    children:[
      {
        path:"user",
        loadChildren:()=> import("./users-management/users-management.module").then((m)=> m.UsersManagementModule)
      },
      {
        path:"utility",
        loadChildren:()=> import("./utility-management/utility-management.module").then((m)=> m.UtilityManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
