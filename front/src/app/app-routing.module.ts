import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './Employees/read-employee/read-employee.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ReadEmployeeComponent },
  { path: 'logout',component:LogoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Add this default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
