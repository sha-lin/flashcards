import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddUpdateComponent } from './subjects/add-update/add-update.component';
import { ShowComponent } from './subjects/show/show.component';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    AddUpdateComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
