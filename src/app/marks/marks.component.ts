import { Component, OnInit,Input } from '@angular/core';
import { NewserviceService } from '../newservice.service';
// import { CustompipePipe } from '../custompipe.pipe';
import { DatePipe } from '@angular/common';
import { CustompipePipe } from '../custompipe.pipe';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
  providers : [NewserviceService,CustompipePipe,DatePipe],
  
})
export class MarksComponent implements OnInit {
  unitone : any;
  fullname : any ="";
  date_pipe = new Date();
  date:any;
  @Input() detailsJson:any;
  constructor(private _service: NewserviceService) {

   }

  ngOnInit():void {
    this.date = this._service.todayDate();
    
  }
 

}
