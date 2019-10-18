import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHeadrComponent } from './card-headr/card-headr.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');


@NgModule({
  declarations: [
    AppComponent,
    CardHeadrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
