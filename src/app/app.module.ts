import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { SubjectsComponent } from './subjects/subjects.component';
// import { AddUpdateComponent } from './subjects/add-update/add-update.component';
// import { ShowComponent } from './subjects/show/show.component';
import { ServicesService } from './services.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { SubjectsComponent } from './subjects/subjects.component';


@NgModule({
  declarations: [
    AppComponent,
    // SubjectsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    // AddUpdateComponent,
    // ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
