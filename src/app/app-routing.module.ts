import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'all-gears', loadChildren: () => import('./pages/all-gears/all-gears.module').then(m => m.AllGearsModule) },
  { path: 'add-gear', loadChildren: () => import('./pages/add-gear/add-gear.module').then(m => m.AddGearModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
