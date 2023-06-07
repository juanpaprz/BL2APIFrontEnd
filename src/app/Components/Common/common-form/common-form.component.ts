import { Component, OnInit } from '@angular/core';
import { CommonFormService } from '../../../Services/Forms/common-form.service';
import { ValidationService } from '../../../Services/validation.service';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css'],
})
export class CommonFormComponent implements OnInit {
  constructor(
    private formService: CommonFormService,
    private validationService: ValidationService
  ) {}

  form = this.formService.form;

  ngOnInit() {}

  isFieldValid(field: string): boolean {
    return this.validationService.isFieldValid(this.form, field);
  }

  setInvalidClass(field: string) {
    return this.validationService.setInvalidClass(this.form, field);
  }
}
