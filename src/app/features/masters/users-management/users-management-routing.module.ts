import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementEditorComponent } from './pages/user-management-editor/user-management-editor.component';

const routes: Routes = [
  {
    path:"",
    component: UserManagementEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
