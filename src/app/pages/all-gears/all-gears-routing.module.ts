import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGearsComponent } from './all-gears.component';

const routes: Routes = [{ path: '', component: AllGearsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllGearsRoutingModule { }
