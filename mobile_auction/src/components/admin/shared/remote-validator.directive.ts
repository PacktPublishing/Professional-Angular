import { Directive, Input} from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validators, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: `[maa-RemoteValidator][ngModel]`,
  providers:[{ provide: NG_ASYNC_VALIDATORS, useExisting: RemoteValidatorDirective, multi: true }]
})

export class RemoteValidatorDirective implements Validator {
//   @Input("maa-RemoteValidator") validationKey: string;
//   @Input("validateFunction") execute: (value: string) => Promise<boolean>;

  validate(control: FormControl): { [key: string]: any } {
    console.log('validator autorun')
    let value: string = control.value;
    return this.execute(value).then((result: boolean) => {
      if (result) {
        return null;
      }
      else {
        let error: any = {};
        error[this.validationKey] = true;
        return error;
      }
    });
  }
}
