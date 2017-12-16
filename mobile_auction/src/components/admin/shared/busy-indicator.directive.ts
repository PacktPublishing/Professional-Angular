import {Directive, HostBinding} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: `[maa-busyIndicator][ngModel]`,
})
export class BusyIndicatorDirective {
  private get _validating(): boolean { return this.model.control != null && this.model.control.pending; };
  @HostBinding("style.borderWidth") get controlBorderWidth(): string { return this._validating ? "3px" : null; };
  @HostBinding("style.borderColor") get controlBorderColor(): string { return this._validating ? "pink" : null };

  constructor(private model: NgModel) { }
}
