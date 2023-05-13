import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Candidate } from 'src/app/Model/candidate';

@Component({
  selector: 'app-read-candidate',
  templateUrl: './read-candidate.component.html',
  styleUrls: ['./read-candidate.component.css']
})
export class ReadCandidateComponent {

  dataSource: MatTableDataSource<Candidate> = new MatTableDataSource<Candidate>()

  candidates: Candidate[] = []; /// assuming you have an array to store the form values
  
  selectedCandidate : Candidate | null = null; ///// variable to get the selected candidate 



  displayedColumns: string[] = ['position', 'name', 'age', 'email', 'department', 'designation', 'skills', 'experience', 'salary', 'contact', 'address', 'actions'];

  ////// call this function to update the data in the table 
    updateDataSource():void {
      this.dataSource = new MatTableDataSource<Candidate>(this.candidates)
  }

  ///////// function to handle the form submission 

  onSubmit(form:any):void {
    if(this.selectedCandidate){
      /////////// update the properites of the selected candidate with the new insert input value of the form 

     this.selectedCandidate.firstname = form.value.firstname  
     this.selectedCandidate.lastname = form.value.lastname; 
 
 
 ///// to reset the selected candidate 
     this.selectedCandidate = null
    } else {
     //////// create new candidate object with the form values and add it to the candidate object
     const newCandidate:Candidate = {
         firstname: form.value.firstname,
         lastname: form.value.lastname,
         name:form.value.name,
         age:form.value.age,
         skills:form.value.skills,
         email:form.value.email
         ///// other properties 
     }
 
    
     /// add the submiited form data in to the candidates array 
   this.candidates.push(newCandidate)
 
    }
   
    ////////// reset the form 
    form.reset()
    this.updateDataSource()
 
   }


 //////// function to handle editing the candidate 
 editCandidate(candidate:Candidate):void {
  /////////// set the selected candidate to the one clicked for editing 
  this.selectedCandidate = candidate 

  //////////// populate the form fields with the selected candidate value 
 //////////// Assuming you have a form variable defined in your template, you can set its values like this:
 if(this.selectedCandidate) {
 this.selectedCandidate = {
    firstname: candidate.firstname,
    lastname: candidate.lastname,
    name:candidate.name,
    age:candidate.age,
    skills:candidate.skills,
    email:candidate.email
    //   // Set other form fields accordingly
     }

  }

 }


  //// function to delete a candidate 
  deleteCandidate(index:number):void {
    this.candidates.splice(index,1)
    ////// update the data source to reflect the changes made during deleting the candidates 
    this.updateDataSource()
  }
}
