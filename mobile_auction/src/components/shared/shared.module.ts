import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SecondsToTimePipe } from './seconds-to-time.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
    imports: [],
    declarations: [SecondsToTimePipe, ReversePipe],
    exports: [SecondsToTimePipe, ReversePipe]
})
export class SharedModule { }