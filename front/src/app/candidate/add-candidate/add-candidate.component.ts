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

candidate = new Candidate;

constructor(private service:CandidatesService ,private http :HttpClient ){}



  postEmployee(name, Dep, age, sal) {
    if (name.invalid || Dep.invalid || age.invalid || sal.invalid) {
      alert('Please Enter valid data');
      window.location.reload();
    }
    else {
      this.serv.postv(this.emp).subscribe(data => {
        this.rout.navigateByUrl('lEmployee')
      })
    }
  }

  ngOnInit(): void {
  }

}
