import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SubjectsComponent} from './subjects/subjects.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'subjects',component:SubjectsComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
