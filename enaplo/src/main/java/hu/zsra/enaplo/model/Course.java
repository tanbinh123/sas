package hu.zsra.enaplo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hu.zsra.enaplo.model.user.group.Student;
import hu.zsra.enaplo.model.user.group.Teacher;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Course model class contains information about the subject.
 */
@Entity
@Table(name = "courses")
public class Course {

    /**
     * Id field [GENERATED AUTOMATICALLY].
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter
    private Long id;

    /**
     * Subject title.
     */
    @Column(name = "title", nullable = false, length = 24)
    @Getter @Setter
    private String title;

    /**
     * Subject year.
     */
    @Column(name = "year", nullable = false)
    @Getter @Setter
    private int year;

    /**
     * Empty constructor.
     */
    public Course() {}

    /**
     * Constructor to make a new instance.
     *
     * @param title Subject title.
     * @param year Subject year.
     * @param teacher Teacher who teach this subject.
     */
    public Course(String title, int year, Teacher teacher) {
        this.title = title;
        this.year = year;
        this.teacher = teacher;
    }

    /**
     * Teacher who teach this subject.
     */
    @ManyToOne
    @JoinColumn(name="teacher_id")
    @Getter @Setter
    private Teacher teacher;

    /**
     * Student who learn this subject.
     */
    @JsonIgnore
    @ManyToMany(mappedBy = "courses", fetch = FetchType.EAGER)
    @Getter @Setter
    private List<Student> students = new ArrayList<>();

    /**
     * Exams that written by students.
     */
    @JsonIgnore
    @OneToMany(mappedBy = "course")
    @Getter @Setter
    private List<Exam> exams = new ArrayList<>();

    /**
     * Course time in Timetable.
     */
    @JsonIgnore
    @OneToMany(mappedBy = "course")
    @Getter @Setter
    private List<TimeTableEntity> lessons = new ArrayList<>();

    /**
     * Reports from this subject.
     */
    @JsonIgnore
    @OneToMany(mappedBy = "course")
    @Getter @Setter
    private List<Report> reports = new ArrayList<>();

}
