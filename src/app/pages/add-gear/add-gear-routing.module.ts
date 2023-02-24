import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGearComponent } from './add-gear.component';

const routes: Routes = [{ path: '', component: AddGearComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGearRoutingModule { }
