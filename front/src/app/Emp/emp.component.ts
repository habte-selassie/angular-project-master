import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/employee.service';
import { Employee } from './employee.interface';
import { ProjectService } from 'src/app/core/project.service';
import { map } from 'rxjs/operators';
import { Project } from '../project/project.interface';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})

export class EmpComponent {

  displayedColumns: string[] = ['id', 'name', 'age', 'birthday', 'favoriteColor', 'projectId', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Employee>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  form: FormGroup;
  showFormValue = false;
  nameButton = 'SAVE';
  option = 1;
  title = 'Employee';

  projectList: Project[] = [];

  constructor(private fb: FormBuilder, private service: EmployeeService, private serviceProject: ProjectService) {

  
      // Initialize the property in the constructor
      this.paginator = {} as MatPaginator;


    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      age: ['', Validators.required],
      birthday: ['', Validators.required],
      favoriteColor: ['', Validators.required],
      projectId: ''
    });

    this.getEmployees();
    this.getSelectProject();
  }

  ngOnInit() { }


  getSelectProject() {
    this.serviceProject.getProjects().subscribe( (data) => {
      this.projectList = data;
    });
  }

  getEmployees() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onSubmit() {

    if (this.nameButton === 'SAVE') {
      this.option = 1;
    } else {
      this.option = 2;
    }

    const employee: Employee = {
      name: this.form.get('name')?.value,
      age: this.form.get('age')?.value,
      birthday: this.form.get('birthday')?.value,
      favoriteColor: this.form.get('favoriteColor')?.value,
      projectId: this.form.get('projectId')?.value
    };

    switch (this.option) {
      case 1:
        this.service.addEmployee(employee).subscribe((data: Employee[]) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          const projectId = this.form.get('projectId');
          if (projectId !== null) {
            const projectIdValue = projectId.value;
            if (this.projectList[projectIdValue]) {
              this.projectList[projectIdValue].teamSize++;
              this.serviceProject
                .editProject(projectIdValue, this.projectList[projectIdValue])
                .subscribe(console.log);
            }
          }
        });
        break;
      case 2:
        const id = this.form.get('id');
        if (id !== null) {
          employee['id'] = id.value;
          this.service.editEmployee(id.value, employee).subscribe((data) => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
          });
        }
        break;
      default:
        break;
    }
    
  }

  editEmployee(row:any) {

    this.showForm(2);

    this.form.patchValue({
      id: row.id,
      name: row.name,
      age: row.age,
      birthday: row.birthday,
      favoriteColor: row.favoriteColor,
      projectId: row.projectId
    });
  }

  showForm(option: number) {

    this.form.patchValue({
      id: '',
      name: '',
      age: '',
      birthday: '',
      favoriteColor: '',
      projectId: ''
    });

    switch (option) {
      case 1: this.nameButton = 'SAVE';
        break;

      case 2: this.nameButton = 'EDIT';
        break;
      default: this.nameButton = 'SAVE';
        break;
    }
    this.showFormValue = !this.showFormValue;
  }

  deleteEmployee(row:any) {
    this.service.deleteEmployee(row).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }



}
