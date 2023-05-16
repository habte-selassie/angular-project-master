import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCandidateComponent } from './candidate/add-candidate/add-candidate.component';
import { ReadCandidateComponent } from './candidate/read-candidate/read-candidate.component';
import { UpdateCandidateComponent } from './candidate/update-candidate/update-candidate.component';
import { EmpComponent } from './Emp/emp.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './Employees/read-employee/read-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Employees/delete-employee/delete-employee.component';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEmployeeComponent,
    ReadEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LogoutComponent,
    NavbarComponent,
    AddCandidateComponent,
    ReadCandidateComponent,
    UpdateCandidateComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

