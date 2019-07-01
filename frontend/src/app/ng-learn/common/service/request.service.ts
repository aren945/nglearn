import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getDate(): string {
    return 'this is some data';
  }
}
