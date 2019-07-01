import { Component, OnInit } from '@angular/core';
import {StorageService} from '../common/service/storage.service';

interface Bobby {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-ng-modale',
  templateUrl: './ng-modale.component.html',
  styleUrls: ['./ng-modale.component.scss']
})

export class NgModaleComponent implements OnInit {

  name: string;
  gender: string;
  city: string[];
  hobbys: Bobby[];
  mark: string;

  constructor(
    private storage: StorageService
  ) {
    this.name = 'zheng';
    this.gender = 'woman1';
    this.city = ['chengdu', 'shanghai'];
    this.hobbys = [{
      name: '吃饭',
      checked: false
    }, {
      name: '睡觉',
      checked: false
    }, {
      name: '看电视',
      checked: true
    }];
  }

  ngOnInit() {
    console.log(this.storage.getTestData());
  }

  changeName() {
    this.name = 'xinglun' + Math.random();
  }
}
