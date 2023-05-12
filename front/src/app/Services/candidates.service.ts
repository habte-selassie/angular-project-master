import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../Model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  private apiUrl = '/api/candidate'

  constructor(private http:HttpClient) { }

  //// to create a new candidate 

  createCandidate(candidate:Candidate):Observable<Candidate>{
    return this.http.post<Candidate>(`${this.apiUrl}`,candidate)
  }

  //////// to get all list of candidates 

  getAllCandidates(candidate:Candidate):Observable<Candidate>{
    return this.http.get<Candidate>(this.apiUrl)
  }

//////// to get a single candidate 

  getCandidate(candidateId:number):Observable<Candidate>{
    const url = `${this.apiUrl}/${candidateId}`
    return this.http.get<Candidate>(url)
  }

  updateCandidate(candidateId:number,candidate:Candidate):Observable<Candidate>{
    const url = `${this.apiUrl}/${candidateId}`
    return this.http.put<Candidate>(url,Candidate)
  }

  deleteCandidate(candidateId:number):Observable<Candidate>{
    const url = `${this.apiUrl}/${candidateId}`
    return this.http.delete<Candidate>(url)
  }
}

