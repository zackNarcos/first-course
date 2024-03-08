import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../core/student.model';
import { StudentService } from '../../core/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.studentService.getStudent(id).subscribe(student => this.student = student);
    }
  }

  updateStudent(): void {
    if (!this.student) {
      return;
    }
    this.studentService.updateStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
