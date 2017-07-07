import { Component } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header.html',
})
export class HeaderComponent{
	title: string = "Title";
	options: any[] = [		
		{
			"title":"Sobre nosotros",
			"path":"about"	
		},
		{
			"title":"Login",
			"path":"Login"	
		}
	];
}
