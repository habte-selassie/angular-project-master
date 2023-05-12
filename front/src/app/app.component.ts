import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){}

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  
  navigateToListEmployee() {
    this.router.navigateByUrl('/list-employee');
  }
  
  navigateToAddEmployee() {
    this.router.navigateByUrl('/add-employee');
  }
  
  navigateToLogout() {
    this.router.navigateByUrl('/logout');
  }
  
  
  title = 'angular-project';
}

