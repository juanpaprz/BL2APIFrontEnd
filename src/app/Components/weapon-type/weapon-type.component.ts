import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeaponTypeFormService } from '../../Services/Forms/weapon-type-form.service';

@Component({
  selector: 'app-weapon-type',
  templateUrl: './weapon-type.component.html',
  styleUrls: ['./weapon-type.component.css'],
})
export class WeaponTypeComponent implements OnInit {
  constructor(private formService: WeaponTypeFormService) {}

  form: FormGroup = this.formService.form;

  ngOnInit() {}

  addType() {
    console.log(this.form);
  }
}
