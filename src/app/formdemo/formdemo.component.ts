import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit  } from '@angular/core';


 import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css'],
})

export class FormdemoComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    hasFirstName: string = '';
    constructor(private formBuilder: FormBuilder,private http: HttpClient  ) { }
    passwordRegex = "^[0-9_]{6,15}$";
    nameRegex = "/^[a-zA-Z_-]*$/"

    jsonData : any =[];
 
   
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['',  Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z_-]*$/)])],
            lastName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z_-]*$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(this.passwordRegex),Validators.minLength(6)]],
            radio : ["", Validators.required],
            checkbox : [false, Validators.requiredTrue]
        });
        this.http.get("http://localhost:8064/php-demo/index.php").subscribe((data) => {this.jsonData.push(data);
        console.log(this.jsonData);
      });
      console.log(this.jsonData,typeof(this.jsonData));
      // this.http.post("http://localhost:8064/php-demo/index.php",this.jsonData).subscribe((data) => console.log(data));
        
        
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if(this.registerForm.controls.firstName.value != ''){
          console.log(this.registerForm.controls);
          this.hasFirstName = '1';
        }
        else{
          console.log(this.registerForm.controls);
          this.hasFirstName = '0';
        }
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;    
        }
        alert('SUCCESS!! :-)')
    }
    
 

}
 
