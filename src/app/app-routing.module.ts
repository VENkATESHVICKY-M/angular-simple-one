import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test/test.component';
import { MarksComponent } from './marks/marks.component';
import { QuestionTestComponent } from './question-test/question-test.component';
import { DemoComponent } from './demo/demo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { MaterialsComponent } from './materials/materials.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    "path":"test",
    "component" : TestComponent,
  },
  {
    "path":"marks",
    "component": MarksComponent,
  },
  
  {
    "path" : "question",
    "component" : QuestionTestComponent,
    children : [
      {
        path : "test",
        component : TestComponent,
      }
    ]

  },
   
  {
    path : "demo",
    component : DemoComponent,
    children : [
   {  
      path : "question",
      component : QuestionTestComponent,
    },
    {
      path : "test",
      component : TestComponent,
    },
     
     
    ]
  },
  {
    path : "form",
    component : FormdemoComponent ,
  },
  {
    path : "materials",
    component : MaterialsComponent
  }
 

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
 
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
