import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-test',
  templateUrl: './question-test.component.html',
  styleUrls: ['./question-test.component.css']
})
export class QuestionTestComponent implements OnInit {
  name : any =""; 
  one: any ="";
  two :any = "";
  three : any ="";
 
  
  // output :any = "";
  // onclickname(){
  //   this.output = this.name;
  // }
  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
  }
  submit(){
    this.router.navigate(["test"],{relativeTo : this.route})
  }


}
