import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityManagementRoutingModule } from './utility-management-routing.module';
import { UtilityManagementEditorComponent } from './pages/utility-management-editor/utility-management-editor.component';


@NgModule({
  declarations: [
    UtilityManagementEditorComponent
  ],
  imports: [
    CommonModule,
    UtilityManagementRoutingModule
  ]
})
export class UtilityManagementModule { }
