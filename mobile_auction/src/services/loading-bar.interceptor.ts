import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { LoadingBarService } from './loading-bar.service';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
    constructor(
        private loadingBarService: LoadingBarService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingBarService.showBar();

        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    this.loadingBarService.hideBar();
                }
            });
    }
}