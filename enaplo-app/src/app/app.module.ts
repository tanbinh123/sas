import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LoginGuard } from './guard/login.guard';
import { AdminGuard } from './guard/admin.guard';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { UserService } from './service/user.service';
import { ConfigService } from './service/config.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/panels/admin-panel/admin-panel.component';
import { TeacherPanelComponent } from './components/panels/teacher-panel/teacher-panel.component';
import { HeadteacherPanelComponent } from './components/panels/headteacher-panel/headteacher-panel.component';
import { StudentPanelComponent } from './components/panels/student-panel/student-panel.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { TeacherDetailsComponent } from './components/teachers/teacher-details/teacher-details.component';
import { TeacherCreateComponent } from './components/teachers/teacher-create/teacher-create.component';
import { StudentCreateComponent } from './components/students/student-create/student-create.component';
import { StudentUpdateComponent } from './components/students/student-update/student-update.component';
import { TeacherUpdateComponent } from './components/teachers/teacher-update/teacher-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClassroomCreateComponent } from './components/classrooms/classroom-create/classroom-create.component';
import { ClassroomListComponent } from './components/classrooms/classroom-list/classroom-list.component';
import { ClassroomUpdateComponent } from './components/classrooms/classroom-update/classroom-update.component';
import { StudentClassroomListComponent } from './components/students/student-classroom-list/student-classroom-list.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { CourseUpdateComponent } from './components/courses/course-update/course-update.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseCreateComponent } from './components/courses/course-create/course-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { SetCourseComponent } from './components/courses/set-course/set-course.component';
import { SetCourseClassroomComponent } from './components/classrooms/set-course-classroom/set-course-classroom.component';
import { CreateExamComponent } from './components/exams/create-exam/create-exam.component';
import { UpdateExamComponent } from './components/exams/update-exam/update-exam.component';
import { CreateExamClassroomComponent } from './components/exams/create-exam-classroom/create-exam-classroom.component';
import { ExamListComponent } from './components/exams/exam-list/exam-list.component';
import { SemesterViewComponent } from './components/reports/semester-view/semester-view.component';
import { CreateReportComponent } from './components/reports/create-report/create-report.component';
import { UpdateReportComponent } from './components/reports/update-report/update-report.component';
import { CreateReportClassroomComponent } from './components/reports/create-report-classroom/create-report-classroom.component';
import { SummaryStudentComponent } from './components/students/summary-student/summary-student.component';
import { SummaryClassroomComponent } from './components/classrooms/summary-classroom/summary-classroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForbiddenComponent,
    HeaderComponent,
    HomeComponent,
    AdminPanelComponent,
    TeacherPanelComponent,
    HeadteacherPanelComponent,
    StudentPanelComponent,
    UserListComponent,
    StudentDetailsComponent,
    TeacherDetailsComponent,
    TeacherCreateComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    TeacherUpdateComponent,
    ClassroomCreateComponent,
    ClassroomListComponent,
    ClassroomUpdateComponent,
    StudentClassroomListComponent,
    CourseListComponent,
    CourseUpdateComponent,
    CourseDetailsComponent,
    CourseCreateComponent,
    UserUpdateComponent,
    SetCourseComponent,
    SetCourseClassroomComponent,
    CreateExamComponent,
    UpdateExamComponent,
    CreateExamClassroomComponent,
    ExamListComponent,
    SemesterViewComponent,
    CreateReportComponent,
    UpdateReportComponent,
    CreateReportClassroomComponent,
    SummaryStudentComponent,
    SummaryClassroomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    LoginGuard,
    AdminGuard,
    AuthService,
    ApiService,
    UserService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
