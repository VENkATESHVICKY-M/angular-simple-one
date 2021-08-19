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
import { importExpr } from '@angular/compiler/src/output/output_ast';
// import { MarksModule } from './marks/marks.module';
// import { NewserviceService } from './newservice.service';

import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
    
  ],
  providers: [DatePipe,CustompipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
