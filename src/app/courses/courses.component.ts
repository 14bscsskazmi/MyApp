import { Component } from '@angular/core';
import { CoursesServices } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title: string = "List of Courses";
  private courses: string[];
  constructor(service: CoursesServices){
    this.courses = service.getCourses();
  }
  
  getCourses = () => {
    return this.courses;
  }

}
