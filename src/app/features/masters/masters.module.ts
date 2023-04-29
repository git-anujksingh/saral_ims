import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { MastersComponent } from './masters.component';


@NgModule({
  declarations: [MastersComponent],
  imports: [
    CommonModule,
    MastersRoutingModule,
    LayoutModule
  ]
})
export class MastersModule { }
