import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllGearsRoutingModule } from './all-gears-routing.module';
import { AllGearsComponent } from './all-gears.component';

import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AllGearsComponent
  ],
  imports: [
    CommonModule,
    AllGearsRoutingModule,
    SharedModuleModule
  ]
})
export class AllGearsModule { }
