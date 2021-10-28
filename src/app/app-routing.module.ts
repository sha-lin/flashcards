import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SubjectsComponent} from './subjects/subjects.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'subjects',component:SubjectsComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
