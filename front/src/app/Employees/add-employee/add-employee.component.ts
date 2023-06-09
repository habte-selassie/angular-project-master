import {FormControl} from '@angular/forms'
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/employee.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/Model/candidate';
import { CandidatesService } from 'src/app/Services/candidates.service';

// import { Employee } from './employee.interface';
// import { MatTableDataSource, MatPaginator } from '@angular/material';
// import { ProjectService } from 'src/app/core/project.service';
// import { map } from 'rxjs/operators';
// import { Project } from '../project/project.interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  showFiller = false;
  candidateForm : FormGroup
  candidate: Candidate = { firstname: '', lastname: '', name: '', age: 0, email: '', skills: '' };

  constructor(private service: CandidatesService,
     private http: HttpClient,
     private formBuilder:FormBuilder,
      private router: Router) {

        this.candidateForm = this.formBuilder.group({
          age:[null],
          email:[null]
        })
       }

  postCandidate(): void {
    if (this.validateForm()) {
      const newCandidate: Candidate = {
        name: this.candidate.name,
        age: this.candidate.age,
        email: this.candidate.email,
        skills: this.candidate.skills,
        firstname: this.candidate.firstname,
        lastname: this.candidate.lastname
      };

      this.service.createCandidate(newCandidate).subscribe(() => {
        this.router.navigateByUrl('list-candidate');
      });
    } else {
      alert('Please enter valid data');
    }
  }

  private validateForm(): boolean {
    return (
      this.candidate.firstname.trim() !== '' &&
      this.candidate.lastname.trim() !== '' &&
      this.candidate.name.trim() !== '' &&
      this.candidate.age > 0 &&
      this.candidate.email.trim() !== '' &&
      this.candidate.skills.trim() !== ''
    );
  }
    ngOnInit(): void {
        
    }
//   displayedColumns: string[] = ['id', 'name', 'age', 'birthday', 'favoriteColor', 'projectId', 'edit', 'delete'];
//   dataSource = new MatTableDataSource<Employee>([]);
//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   form: FormGroup;
//   showFormValue = false;
//   nameButton = 'SAVE';
//   option = 1;
//   title = 'Employee';

//   projectList: Project[] = [];

//   constructor(private fb: FormBuilder, private service: EmployeeService, private serviceProject: ProjectService) {

//     this.form = this.fb.group({
//       id: '',
//       name: ['', Validators.required],
//       age: ['', Validators.required],
//       birthday: ['', Validators.required],
//       favoriteColor: ['', Validators.required],
//       projectId: ''
//     });

//     this.getEmployees();
//     this.getSelectProject();
//   }

//   ngOnInit() { }


//   getSelectProject() {
//     this.serviceProject.getProjects().subscribe( (data) => {
//       this.projectList = data;
//     });
//   }

//   getEmployees() {
//     this.service.getEmployees().subscribe((data: Employee[]) => {
//       this.dataSource = new MatTableDataSource(data);
//       this.dataSource.paginator = this.paginator;
//     });
//   }

//   onSubmit() {

//     if (this.nameButton === 'SAVE') {
//       this.option = 1;
//     } else {
//       this.option = 2;
//     }

//     const employee: Employee = {
//       name: this.form.get('name').value,
//       age: this.form.get('age').value,
//       birthday: this.form.get('birthday').value,
//       favoriteColor: this.form.get('favoriteColor').value,
//       projectId: this.form.get('projectId').value
//     };

//     switch (this.option) {
//       case 1:
//         this.service.addEmployee(employee).subscribe((data: Employee[]) => {
//           this.dataSource = new MatTableDataSource(data);
//           this.dataSource.paginator = this.paginator;
//           this.projectList[this.form.get('projectId').value].teamSize++;
//           this.serviceProject.
//             editProject(this.form.get('projectId').value, 
//                         this.projectList[this.form.get('projectId').value]).subscribe( console.log );
//         });
//         break;
//       case 2:
//         employee['id'] = this.form.get('id').value;
//         this.service.editEmployee(this.form.controls.id.value, employee).subscribe((data) => {
//           this.dataSource = new MatTableDataSource(data);
//           this.dataSource.paginator = this.paginator;
//         });
//         break;

//       default:
//         break;
//     }
//   }

//   editEmployee(row) {

//     this.showForm(2);

//     this.form.patchValue({
//       id: row.id,
//       name: row.name,
//       age: row.age,
//       birthday: row.birthday,
//       favoriteColor: row.favoriteColor,
//       projectId: row.projectId
//     });
//   }

//   showForm(option: number) {

//     this.form.patchValue({
//       id: '',
//       name: '',
//       age: '',
//       birthday: '',
//       favoriteColor: '',
//       projectId: ''
//     });

//     switch (option) {
//       case 1: this.nameButton = 'SAVE';
//         break;

//       case 2: this.nameButton = 'EDIT';
//         break;
//       default: this.nameButton = 'SAVE';
//         break;
//     }
//     this.showFormValue = !this.showFormValue;
//   }

//   deleteEmployee(row) {
//     this.service.deleteEmployee(row).subscribe((data) => {
//       this.dataSource = new MatTableDataSource(data);
//       this.dataSource.paginator = this.paginator;
//     });
//   }



}







// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router'
// import { Candidate } from 'src/app/Model/candidate';
// import { CandidatesService } from 'src/app/Services/candidates.service';

// //import { DepFlags } from '@angular/compiler/src/core';



// @Component({
//   selector: 'app-add-candidate',
//   templateUrl: './add-candidate.component.html',
//   styleUrls: ['./add-candidate.component.css']
// })
// export class AddCandidateComponent {

// candidate:Candidate = {firstname : '',lastname : '', name:'', age:0, email:'',skills:''}

// constructor(private service:CandidatesService ,private http :HttpClient ,private router:Router ){}


// postCandidate(firstname :any, lastname:any , name:any,age:any,email:any,skills:any){
//   if(firstname.invalid | lastname.invalid | name.invalid || age.invalid || email.invalid || skills.invalid) {
//     alert('Please Enter Valid Data')
//     window.location.reload()
//   }
//   else {
//     const newCandidate: Candidate = {
//       name:name.value,
//       age:age.value,
//       email:email.value,
//       skills:skills.value,
//       firstname:firstname.value,
//       lastname:lastname.value
//     }
//     this.service.createCandidate(newCandidate).subscribe(()=>{
//       this.router.navigateByUrl('list-candidate')
//     })
//   }
// }

// }




