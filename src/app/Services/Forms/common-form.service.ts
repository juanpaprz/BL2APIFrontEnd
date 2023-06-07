import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CommonFormService {
  constructor() {}

  readonly form = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    name: new FormControl('', Validators.required),
  });
}
