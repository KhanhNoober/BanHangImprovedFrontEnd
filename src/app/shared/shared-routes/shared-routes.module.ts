import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';

import { SharedAngularMaterialModule } from '../shared-angular-material/shared-angular-material.module';


@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedAngularMaterialModule
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SharedRoutesModule { }
