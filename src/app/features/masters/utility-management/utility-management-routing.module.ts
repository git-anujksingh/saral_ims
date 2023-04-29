import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityManagementEditorComponent } from './pages/utility-management-editor/utility-management-editor.component';

const routes: Routes = [
  {
    path:"",
    component: UtilityManagementEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityManagementRoutingModule { }
