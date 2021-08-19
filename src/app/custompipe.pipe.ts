import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { NewserviceService } from './newservice.service';
@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  constructor(private _datee : DatePipe,private _service: NewserviceService){  }
  transform(value: Date | any , args: string): any {
    let newdate = this._datee.transform(value,args);
    return newdate;
  }
   

}
