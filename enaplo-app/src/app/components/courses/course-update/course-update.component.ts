import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { CourseResponseDTO } from 'src/app/dto/response/courseResponseDTO';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/model/teacher';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  currentUser: any = {};
  isDataAvailable: boolean = false;
  id: number;
  teachers: Observable<Teacher[]>;
  course = new Course();
  response = new CourseResponseDTO();

  constructor(private userService: UserService, private teacherService: TeacherService, 
    private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getMyInfo().toPromise().then(data =>  {
      this.currentUser = data;
      this.courseService.findById(this.id).subscribe(data => this.course = data);
    })
    .then(() => this.teacherService.findAll().subscribe(data => this.teachers = data))
    .then(() => this.isDataAvailable = true);
  }

  isDataChanged() {
    
  }

  onSubmit() {
  }

  reset() {

  }

  goBack() {
    this.router.navigate(['/course/all']);
  }

  userRole(): string {
    return this.admin.authorities[0].authority + '';
  }

}
