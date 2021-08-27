import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustompipePipe } from './custompipe.pipe';
import { DatePipe } from '@angular/common';
import { QuestionTestModule } from './question-test/question-test.module';
import { MarksModule } from './marks/marks.module';
import { DemoComponent } from './demo/demo.component';
import { TestModule } from './test/test.module';
import { FormdemoModule } from './formdemo/formdemo.module';
import { MatSliderModule } from '@angular/material/slider'
// import { MarksModule } from './marks/marks.module';
// import { NewserviceService } from './newservice.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module'; 
// import { MatInputModule} from '@angular/material/input';
// import { MatFormField, MatFormFieldModule, MatLabel,  } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuestionTestModule,
    MarksModule,
    TestModule,
    ReactiveFormsModule,
    FormdemoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialsModule,

     
  ],
 
  providers: [DatePipe,CustompipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
