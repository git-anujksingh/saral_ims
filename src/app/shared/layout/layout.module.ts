import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutAppComponent } from './pages/layout-app/layout-app.component';
import { CommonModuleModule } from 'src/app/common/common-module/common-module.module';
import { DashoardComponent } from './pages/dashoard/dashoard.component';
import { LayoutComponent } from './pages/layout.component';


@NgModule({
  declarations: [
    LayoutAppComponent,
    LayoutComponent,
    DashoardComponent
  ],
  imports: [
    CommonModule,
    CommonModuleModule,
    LayoutRoutingModule
  ],
  exports:[
    LayoutAppComponent
  ]
})
export class LayoutModule { }
