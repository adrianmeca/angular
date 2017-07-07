import { Component } from '@angular/core';

@Component({
  selector: 'Login',
  templateUrl: './login.html',
})
export class LoginComponent{
	title: string = "Iniciar sesion";
	private controls: any[] = [
		{
			"id":"email",
			"type":"email",
			"class":"form-control",
			"label":"Ingrese su mail"
		},
		{
			"id":"password",
			"type":"password",
			"class":"form-control",
			"label":"Ingrese su contraseña"
		},
		{
			"type":"submit",
			"class":"btn btn-default pull-right",
			"label":"Iniciar sesion",
			"action": ""
		}
	];
}
