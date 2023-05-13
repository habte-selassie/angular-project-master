export interface Candidate {
    id?:number,
    firstname:string,
    lastname:string,
    name:string,
    age:number,
    email:string,
    // department: string,
    // designation: string,
    skills: string,
    // experience: string,

    [key: string]: any;
}