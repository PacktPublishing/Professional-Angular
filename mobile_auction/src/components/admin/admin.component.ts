import {Component} from '@angular/core';

@Component({
    template: `
        <div class="sub-nav">
            <sub-nav></sub-nav>
        </div>
        <router-outlet></router-outlet>
    `
})
export class AdminComponent { }
