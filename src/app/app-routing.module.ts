import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/layout/pages/login/login.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch: 'full'
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"masters",
    loadChildren:()=> import("./features/masters/masters.module").then((m)=> m.MastersModule)
  },
  {
    path:"dashboard",
    loadChildren:()=> import("./shared/layout/layout.module").then((m)=> m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
