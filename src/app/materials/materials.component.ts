import { SummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
 favoriteSeason:any = ""
 seasons : any[] = ["summer","winter","autumn"];

 options : any[] = [
   {
     value : "",
     
   },
   {
     value: "India"
   },
   {
     value: " USA"

   },
   {
     value: "UAE"
   }
 ];
 showFiller = false;
   

   
  constructor() { }

  ngOnInit() {
     
  }
   

}
