import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css' ]
})
export class FormComponent {
  myForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
      this.myForm = new FormGroup({
        'userData': new FormGroup({
          'document': new FormControl(null, Validators.required),
          'documentMask': new FormControl(null, Validators.required),
        })
      });   
  
      this.myForm.statusChanges.subscribe(
        (data: any) => console.log(data)
      );
    }
    
    onSubmit() {
      console.log(this.myForm);
    }

  }
