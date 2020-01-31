import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/model/teacher';
import { CourseResponseDTO } from 'src/app/dto/response/courseResponseDTO';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  course = new CourseResponseDTO();
  currentUser: any = {};
  isDataAvailable: boolean  = false;
  teachers: Observable<Teacher[]>;
  selectedOption: any = {};

  constructor(private userService: UserService, private router: Router,
    private teacherService: TeacherService, private courseService: CourseService) {
     
  }

  ngOnInit() {
    this.userService.getMyInfo().toPromise().then(data =>  {
      this.currentUser = data;
      this.teacherService.findAll().subscribe(data => {
        this.teachers = data;
        this.isDataAvailable = true;
      });
    });
  }

  onSubmit() {
    this.course.teacher_id = Number(this.selectedOption.id);
    this.courseService.create(this.course).subscribe(() => { 
      this.reset();
    });
    this.refresh(); 
  }

  reset() {
    this.course = new CourseResponseDTO();
    this.isDataAvailable = false;
    this.selectedOption = {};
  }

  refresh(): void {
    window.location.reload();
  }

  goBack() {
    this.router.navigate(['/course/create']);
  }

  userRole(): string {
    return this.currentUser.authorities[0].authority + '';
  }

}
