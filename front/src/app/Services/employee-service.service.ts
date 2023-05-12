import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IEmployee from '../Model/Employees'
import Employee from '../Model/Employees';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  private apiUrl = 'api/employees'

  constructor(private http:HttpClient) { }

 
   /////////// to get all of the employees
  getEmployees():Observable<Employee>{
    return this.http.get<Employee[]>(this.apiUrl)
  }

  ////// to get a signle employee
  getEmployee(id:Number):Observable<Employee>{
    const url =  `${this.apiUrl}/{id}`
    return this.http.get<Employee>(url)
  }

  /// to ceate an employee 
  createEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,employee)
  }

  /// use to update an employee 
  updateEmployee(employee:Employee):Observable<Employee>{
     const url = `${this.apiUrl}/${employee.id}`
     return this.http.put<Employee>(url,employee)
  }

  ////////// to delete a specific employee
  deleteEmployee(employee:Employee):Observable<Employee>{
   const url = `${this.apiUrl}/${employee.id}`
   return this.http.delete<Employee>(url)
  }

}
