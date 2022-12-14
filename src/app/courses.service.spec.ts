import { TestBed } from '@angular/core/testing';

import { CoursesServices } from './courses.service';

describe('CoursesServicesService', () => {
  let service: CoursesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
