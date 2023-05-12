import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {



  value = "Clear Me"

  email = new FormControl('',[Validators.required,Validators.email])
    
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You Must Enter A Value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
     
    }
}


