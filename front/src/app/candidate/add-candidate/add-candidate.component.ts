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
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/Model/candidate';
import { CandidatesService } from 'src/app/Services/candidates.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {
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
}
