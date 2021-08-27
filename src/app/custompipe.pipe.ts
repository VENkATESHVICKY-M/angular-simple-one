import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

 
@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  constructor(private _datee : DatePipe){  }
  transform(value: Date | any , args: string): any {
    let newdate = this._datee.transform(value,args);
    return newdate;
  }
   

}
