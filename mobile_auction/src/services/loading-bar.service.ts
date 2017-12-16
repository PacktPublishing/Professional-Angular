import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingBarService {
    private loadingBarSubject = new Subject<boolean>();
    loadingBarState = this.loadingBarSubject.asObservable();

    showBar() {
        this.loadingBarSubject.next(true);
    }

    hideBar() {
        this.loadingBarSubject.next(false);
    }
}
