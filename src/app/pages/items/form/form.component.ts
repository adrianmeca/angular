import { Component ,Input, OnInit} from '@angular/core';
import { FormsGroup } from '@angular/forms';

@Component({
  selector: 'form-tag',
  templateUrl: './form.html',
})

export class FormComponent implements OnInit{
	@Input() controls: any[];
	myform :FormsGroup;

	submitForm()
	{
		console.log('user');
	}
}
