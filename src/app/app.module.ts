import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { SharedRoutesModule } from './shared/shared-routes/shared-routes.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './redux/reducers/product.reducer';
import { ProductEffects } from './redux/effects/product.effect';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    SharedModuleModule,
    SharedRoutesModule,

    StoreModule.forRoot({ product: productReducer }, {}),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
