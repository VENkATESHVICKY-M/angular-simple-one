import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
unit : any;
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
  }
  question(){
    this.router.navigate(["question"],{relativeTo : this.route})
  }
  test(){
    this.router.navigate(["test"],{relativeTo : this.route})
  }
  tabs(){
    this.router.navigate(["/demo"],{relativeTo : this.route})
  }

}
