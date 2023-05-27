import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashoardComponent } from './pages/dashoard/dashoard.component';
import { LayoutComponent } from './pages/layout.component';

const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
      {
        path:"",
        component: DashoardComponent
      },
      {
      path:"masters",
      loadChildren:()=> import("./../../features/masters/masters.module").then((m)=> m.MastersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
