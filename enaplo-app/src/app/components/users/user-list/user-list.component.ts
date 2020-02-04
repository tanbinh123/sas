import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  searchText;
  users: Observable<User[]>;
  isDataAvailable:boolean = false;
  currentUser: any = {};
  
  constructor(private userService: UserService, private router: Router,
    private studentService: StudentService, private teacherService: TeacherService) { }

  ngOnInit() {
    this.userService.getMyInfo().toPromise().then(data =>  {
      this.currentUser = data;
       this.userService.getAll().subscribe(data => {
        this.users = data;
        this.isDataAvailable = true;
      });
    });
  }

  userRole(): string {
    return this.currentUser.authorities[0].authority + '';
  }

  details(user_id: number) {
    this.userService.getById(user_id).subscribe(data => {
      if(data.authorities[0].authority + '' === 'ROLE_STUDENT') {
        this.studentService.findByUserId(user_id).subscribe(data => this.router.navigate(['student/details', data.id]));
      } else if(data.authorities[0].authority + '' === 'ROLE_TEACHER' 
                  || data.authorities[0].authority + '' === 'ROLE_HEADTEACHER') {
        this.teacherService.findByUserId(user_id).subscribe(data => this.router.navigate(['teacher/details', data.id])); 
      }
    });
  }

  update(user_id: number) {
    this.userService.getById(user_id).subscribe(data => {
      if(data.authorities[0].authority + '' === 'ROLE_STUDENT') {
        this.studentService.findByUserId(user_id).subscribe(data => this.router.navigate(['student/update', data.id]));
      } else if(data.authorities[0].authority + '' === 'ROLE_TEACHER' 
                  || data.authorities[0].authority + '' === 'ROLE_HEADTEACHER') {
        this.teacherService.findByUserId(user_id).subscribe(data => this.router.navigate(['teacher/update', data.id])); 
      }
    });
  }

  setCourse(student_id: number) {
    this.router.navigate(['course/setCourse', student_id]);
  }

  delete(user_id: number) {
    this.userService.getById(user_id).subscribe(data => {
      if(data.authorities[0].authority + '' === 'ROLE_STUDENT') {
        this.studentService.findByUserId(user_id).subscribe(data => {
          this.studentService.delete(data.id).subscribe(() => {
              this.userService.delete(user_id).subscribe(() => {

              });
          });
        });
      } else if(data.authorities[0].authority + '' === 'ROLE_TEACHER' 
                  || data.authorities[0].authority + '' === 'ROLE_HEADTEACHER') {
        this.teacherService.findByUserId(user_id).subscribe(data => {
          this.teacherService.delete(data.id).subscribe(() => {
            this.userService.delete(user_id).subscribe(() => {
                
              });
          });
        }); 
      }
    });
  }
}
