import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable
        .subscribe((studentsData: any) => {
            //this.students = studentsData;
           console.log(studentsData);
           let flag = studentsData instanceof Array;//Student;
           console.log(flag);
            if(flag){
            this.students = studentsData;
           // studentsObservable.unsubscribe();
            }
        });
        
        // setTimeout(() => { 
        //   studentsObservable.unsubscribe();
        // },3000);
    }
}