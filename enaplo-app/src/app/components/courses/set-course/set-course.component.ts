import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';
import { UserService } from 'src/app/service/user.service';
import { CourseService } from 'src/app/service/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-course',
  templateUrl: './set-course.component.html',
  styleUrls: ['./set-course.component.scss']
})
export class SetCourseComponent implements OnInit {

  student_id: number;
  currentUser: any = {};
  selectedOption: any = {};
  isDataAvailable: boolean = false;
  courses: Observable<Course[]>;

  constructor(private userService: UserService, private courseService: CourseService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.student_id = this.route.snapshot.params['id'];
    this.userService.getMyInfo().toPromise().then(data =>  {
      this.currentUser = data;
      this.courseService.findAll().subscribe(data => {
        this.courses = data;
        this.isDataAvailable = true;
      });
    });
  }

  onSubmit() {
    this.courseService.setCourse(this.student_id, this.selectedOption.id).subscribe();
    this.goBack();
  }

  goBack() {
    this.router.navigate(['user/all']);
  }

  userRole(): string {
    return this.currentUser.authorities[0].authority + '';
  }

}
