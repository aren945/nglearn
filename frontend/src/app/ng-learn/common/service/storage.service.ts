import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  testData: string;

  constructor() { }

  getTestData(): string {
    return this.testData;
  }

  setTestData(text: string) {
    this.testData = text;
  }
}
