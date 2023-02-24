import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGearRoutingModule } from './add-gear-routing.module';
import { AddGearComponent } from './add-gear.component';

import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AddGearComponent
  ],
  imports: [
    CommonModule,
    AddGearRoutingModule,
    SharedModuleModule
  ]
})
export class AddGearModule { }
