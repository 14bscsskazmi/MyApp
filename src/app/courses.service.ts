import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesServices {
  getCourses = () => {
    return ["Physics", "Chemistry", "Mathematics"];
  }
}
