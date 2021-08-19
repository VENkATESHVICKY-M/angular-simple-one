import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './marks.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MarksComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    
  ],
  providers: [ ]
})
export class MarksModule { }
