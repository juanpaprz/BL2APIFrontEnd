import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CommonFormService {
  constructor() {}

  readonly form: FormGroup = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
      Validators.minLength(4),
    ]),
    name: new FormControl('', Validators.required),
  });
}
