import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './../items/form/form.component';

@NgModule({
  imports:      [ BrowserModule,FormComponent],
  declarations: [ FormComponent]
})
export class LoginModule { }
