import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../../Services/validation.service';
import { WeaponTypeFormService } from '../../Services/Forms/weapon-type-form.service';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.css'],
})
export class WeaponTypeComponent implements OnInit {
  constructor(
    private formService: WeaponTypeFormService,
    private validationService: ValidationService
  ) {}

  form: FormGroup = this.formService.form;

  ngOnInit() {}

  addType() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.validationService.toucheFields(this.form, true);
    }
  }
}
