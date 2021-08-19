import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  static todayDate(): any[] | undefined {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  todayDate()
  {
    let date = new Date();
    return date;
  }
}
