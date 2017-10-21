import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // "ngx-mask": "^2.0.3", -------> cannot import on app.module
    // NgxMaskModule.forRoot(options) options??
    // NgxMaskModule.forRoot(),
    // "ngx-mask": "^1.0.3", -------> problem on pristine input property
    NgxMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
