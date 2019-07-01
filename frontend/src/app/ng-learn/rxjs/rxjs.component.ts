import { Component, OnInit } from '@angular/core';
import {RequestService} from '../common/service/request.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(
    private request: RequestService
  ) { }

  ngOnInit() {
    console.log(this.request.getDate());
  }

}
