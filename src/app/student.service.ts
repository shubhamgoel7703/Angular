import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


students: Student[] = [{
  id: 1,
  name: 'Krunal',
  enrollmentNumber: 110470116021,
  college: 'VVP Engineering College',
  university: 'GTU'
},
{
  id: 2,
  name: 'Rushabh',
  enrollmentNumber: 110470116023,
  college: 'VVP Engineering College',
  university: 'GTU'
},
{
  id: 3,
  name: 'Ankit',
  enrollmentNumber: 110470116022,
  college: 'VVP Engineering College',
  university: 'GTU'
}];


public getStudents(): any {
  const studentsObservable = new Observable(observer => {

    setTimeout(() => { 
      observer.next("Helloooo");
    },2000);

    setTimeout(() => { 
      observer.next(this.students);
    },4000);
  
         setTimeout(() => { 
             observer.next(123123);
         }, 6000);
  });

  return studentsObservable.filter(studentsData => studentsData instanceof Array);
}

  constructor() { }
}
