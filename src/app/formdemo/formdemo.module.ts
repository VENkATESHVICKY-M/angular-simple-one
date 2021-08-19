import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdemoComponent } from './formdemo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FormdemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class FormdemoModule { }
