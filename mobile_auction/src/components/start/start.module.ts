import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StartComponent }  from './start.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        SharedModule
    ],
    declarations: [StartComponent],
    exports: [StartComponent],
})
export class StartModule { }