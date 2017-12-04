import {Component} from '@angular/core';

@Component({
    template: `
        <div class="sub-nav">
            <sub-nav></sub-nav>
        </div>
        <div class="row">
            <div class="col-sm-2 side-pane-right">
                <side-nav></side-nav>
            </div>
            <div class="col-sm-10">
                <div class="m-r-md m-l-md auction">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `
})
export class AdminComponent { }
