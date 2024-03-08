import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StudentCreateComponent} from "./student/student-create/student-create.component";
import {LoginComponent} from "./login/login.component";
import {StudentDetailsComponent} from "./student/student-details/student-details.component";
import {StudentEditComponent} from "./student/student-edit/student-edit.component";
import {StudentListComponent} from "./student/student-list/student-list.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentCreateComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
