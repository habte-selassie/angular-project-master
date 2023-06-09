import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddCandidateComponent } from './candidate/add-candidate/add-candidate.component';
import { ReadCandidateComponent } from './candidate/read-candidate/read-candidate.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './Employees/read-employee/read-employee.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/view-profile/profile.component';
export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'list-employee', component: ReadEmployeeComponent },
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'list-candidate', component: ReadCandidateComponent },
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  { path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Add this default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
