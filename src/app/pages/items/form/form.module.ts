import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsGroup,FormsModule,ReactiveFormsModule,ReactiveFormsModule } from '@angular/forms';

import { FormComponent }  from './form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,FormsGroup,ReactiveFormsModule],
  declarations: [ FormComponent]
})

export class FormModule { }

