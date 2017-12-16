import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { LoadingBarService } from './../../../services/loading-bar.service';

@Component({
    selector: 'loading-bar',
    templateUrl: '/src/components/app/loading-bar/loading-bar.component.html',
    styles: [`
        .loader-hidden {
            visibility: hidden;
        }
        .loader-overlay {
            position: absolute;
            width:100%;
            top:0;
            left: 0;
            opacity: 1;
            z-index: 500000;
        }
        svg {
            display: block;
            width: 100%
        }
    `]
})
export class LoadingBarComponent implements OnInit, OnDestroy {
    show: boolean = true;
    subscription: Subscription;

    constructor(
        private loadingBarService: LoadingBarService
    ) { }

    ngOnInit() { 
        this.subscription = this.loadingBarService
                                .loadingBarState
                                .subscribe(
                                    (data: boolean) => {
                                        this.show = data;
                                    }
                                );
    }

    ngOnDestroy() { 
        this.subscription.unsubscribe()
    }
}