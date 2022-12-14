import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource.component';
import { NextstepsComponent } from './nextsteps.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesServices } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    NextstepsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
