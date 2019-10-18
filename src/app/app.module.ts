import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHeadrComponent } from './card-headr/card-headr.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { from } from 'rxjs';
registerLocaleData(localeVi, 'vi');


@NgModule({
  declarations: [
    AppComponent,
    CardHeadrComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
