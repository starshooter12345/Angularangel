import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { FormdemoComponent } from './formdemo/formdemo.component';

const routes: Routes = [

  {path : 'students', component: StudentlistComponent},
  {path : 'teachers', component: TeacherlistComponent},
  {path : 'forms', component: FormdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = { StudentlistComponent, TeacherlistComponent, FormdemoComponent}
