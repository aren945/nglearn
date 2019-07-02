import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getDate(): string {
    return 'this is some data';
  }

  GetCallBackData(cb) {
    setTimeout(() => {
      const a = 100;
      cb(a);
    }, 1000);
  }

  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1000);
      }, 1000);
    });
  }

  getRxjsData(): Observable<string> {
    return new Observable<string>(observer => {
      setTimeout(() => {
        observer.next('observable timeout');
        // observer.error('dsad');
      }, 3000);
    });
  }

  getManyRxjsData(): Observable<string> {
    let count = 0;
    return new  Observable(observer => {
      setInterval(() => {
        count++;
        observer.next('interval' + count);
      }, 300);
    });
  }
}
