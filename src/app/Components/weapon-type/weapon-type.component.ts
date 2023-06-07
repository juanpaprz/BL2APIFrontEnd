import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonFormService } from '../../Services/Forms/common-form.service';
import { ValidationService } from '../../Services/validation.service';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.css'],
})
export class WeaponTypeComponent implements OnInit {
  constructor(private formService: CommonFormService) {}

  form: FormGroup = new FormGroup({});

  typesArray: FormGroup[] = [];

  get types() {
    return this.form.get('types') as FormArray;
  }

  ngOnInit() {
    this.typesArray.push(this.formService.form);

    this.form = new FormGroup({
      types: new FormArray(this.typesArray),
    });
  }
}
