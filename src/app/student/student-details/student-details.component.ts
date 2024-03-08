import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../../core/student.model';
import { StudentService } from '../../core/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id !== null) {
      this.studentService.getStudent(id).subscribe(student => this.student = student);
    }
  }
}
