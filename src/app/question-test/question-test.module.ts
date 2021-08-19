import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { QuestionTestComponent } from './question-test.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    QuestionTestComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule

  ]
})
export class QuestionTestModule { }
