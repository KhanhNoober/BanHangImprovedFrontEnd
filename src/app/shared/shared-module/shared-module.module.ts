import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

//Components
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { CardComponent } from 'src/app/components/card/card.component';

//Angular Material
import { SharedAngularMaterialModule } from '../shared-angular-material/shared-angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    FormsModule,
  ],
  providers: [CurrencyPipe],
  exports: [
    NavBarComponent,
    CardComponent,
    SharedAngularMaterialModule,
    FormsModule
  ]
})


export class SharedModuleModule { }
