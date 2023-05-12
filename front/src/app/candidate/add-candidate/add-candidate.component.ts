import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Candidate } from 'src/app/Model/candidate';
import { CandidatesService } from 'src/app/Services/candidates.service';
//import { DepFlags } from '@angular/compiler/src/core';



@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {

candidate:Candidate = {name:'', age:0, email:'',skills:''}

constructor(private service:CandidatesService ,private http :HttpClient ,private router:Router ){}


postCandidate(name:any,age:any,email:any,skills:any){
  if(name.invalid || age.invalid || email.invalid || skills.invalid) {
    alert('Please Enter Valid Data')
    window.location.reload()
  }
  else {
    const newCandidate: Candidate = {
      name:name.value,
      age:age.value,
      email:email.value,
      skills:skills.value
    }
    this.service.createCandidate(newCandidate).subscribe(()=>{
      this.router.navigateByUrl('list-candidate')
    })
  }
}

}
