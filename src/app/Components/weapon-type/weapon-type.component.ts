import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../Services/validation.service';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.css'],
})
export class WeaponTypeComponent implements OnInit {
  constructor(private validationService: ValidationService) {}

  form: FormGroup = new FormGroup({});

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      name: new FormControl('', Validators.required),
    });
  }

  isFieldValid(field: string): boolean {
    return this.validationService.isFieldValid(this.form, field);
  }

  setInvalidClass(field: string) {
    return this.validationService.setInvalidClass(this.form, field);
  }
}
