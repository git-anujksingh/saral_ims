import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { MastersComponent } from './masters.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';


@NgModule({
  declarations: [MastersComponent, MasterLayoutComponent],
  imports: [
    CommonModule,
    MastersRoutingModule,
    LayoutModule
  ]
})
export class MastersModule { }
