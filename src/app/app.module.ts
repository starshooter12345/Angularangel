import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppservService } from './appserv.service';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { Democomponent2Component } from './democomponent2/democomponent2.component';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { FormdemoComponent } from './formdemo/formdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    Democomponent2Component,
    Student1Component,
    Student2Component,
    StudentlistComponent,
    TeacherlistComponent,
    FormdemoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
