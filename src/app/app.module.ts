import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeaderComponent }  from './pages/header/header.component';
import { LoginComponent }  from './pages/login/login.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path:'Login' component:LoginComponent } 
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ HeaderComponent,LoginComponent],
  bootstrap:    [ HeaderComponent ]
})
export class AppModule { }
