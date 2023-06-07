import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../Services/validation.service';
import { WeaponTypeFormService } from '../../../Services/Forms/weapon-type-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css'],
})
export class CommonFormComponent implements OnInit {
  constructor(
    private formService: WeaponTypeFormService,
    private validationService: ValidationService
  ) {}

  ngOnInit() {}

  form: FormGroup = this.formService.form;

  isFieldValid(field: string): boolean {
    return this.validationService.isFieldValid(this.form, field);
  }

  setInvalidClass(field: string) {
    return this.validationService.setInvalidClass(this.form, field);
  }
}
