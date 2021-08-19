import { Component } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]

})

export class AppComponent {
  title = 'angular-new';
  // MaliciousData : string = "Hello  ";//property binding 

  // interpolation : any = "interpolation test";  //interpolation binding
  // property :any ="property binding"; //property binding
  // italic :any ="classs"
  // isTrue: boolean = true;

  // pipe = "this is pipes concept"
  // currency_pipe = 199;
   date_pipe = new Date();
  // percent_pipe = 0.90;
  // json_pipe = {one:1,"two":2,"three":3}
  // date = new Date()
  todaydate :any;
  constructor(private _newService : NewserviceService){
  }
  
  ngOnInit(){
    this.todaydate = this._newService.todayDate();
  }

  firstname :any ="";
  

 
  

}
