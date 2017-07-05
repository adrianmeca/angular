import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './header.html',
})
export class HeaderComponent{
	title: string = "Tittle";
	options: any[] = [		
		{
			"title":"Sobre nosotros"
			"path":"about"	
		},
		{
			"title":"Login"
			"path":"Login"	
		}
	];
}
