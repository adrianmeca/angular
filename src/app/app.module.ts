import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HeaderComponent }  from './pages/header/header.component';
import { LoginComponent }  from './pages/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { FormComponent } from './pages/items/form/form.component';



const appRoutes: Routes = [
	{ path:'Login' , component:LoginComponent } 
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,HeaderComponent,LoginComponent,FormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
