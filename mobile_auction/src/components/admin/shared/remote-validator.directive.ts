import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validators, Validator, FormControl } from '@angular/forms';

import { Auction } from './../../../services/model';
import { AuctionService } from './../../../services/auction.service';

@Directive({
  selector: `[maa-RemoteValidator][ngModel]`,
  providers:[{ provide: NG_ASYNC_VALIDATORS, useExisting: RemoteValidatorDirective, multi: true }]
})

export class RemoteValidatorDirective implements Validator {
  
  constructor(
    private auctionService: AuctionService
  ) { }

  validate(control: FormControl): { [key: string]: any } {
    let value: string = control.value;
    
    return this.auctionService.getAuction(value)
      .toPromise()
      .then((auction: Auction) => {
        let error: any = {};
        error[value] = true;
        return error;
      }, error => {
        return null;
      })
  }

}
