import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialsComponent } from './materials.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule} from '@angular/material/icon'
import { MatSelectModule} from '@angular/material/select'
import { MatRadioModule } from "@angular/material/radio"
import { MatListModule } from "@angular/material/list"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatToolbarModule } from "@angular/material/toolbar" 
@NgModule({
  declarations: [
    MaterialsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
   
    
  
    
  ]
})
export class MaterialsModule { }
