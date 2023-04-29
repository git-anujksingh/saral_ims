import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UserManagementEditorComponent } from './pages/user-management-editor/user-management-editor.component';


@NgModule({
  declarations: [
    UserManagementEditorComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
