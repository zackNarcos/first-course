import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../core/student.model';
import { StudentService } from '../../core/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  student: Student = {} as Student;

  constructor(private studentService: StudentService, private router: Router) { }

  createStudent(): void {
    this.studentService.createStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
