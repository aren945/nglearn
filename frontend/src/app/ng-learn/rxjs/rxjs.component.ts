import { Component, OnInit } from '@angular/core';
import {RequestService} from '../common/service/request.service';
import {filter} from 'rxjs/operators';

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
  //  回调方式异步
    this.request.GetCallBackData((data) => {
      console.log(data);
    });

    this.request.getPromiseData().then(res => {
      console.log(res);
    });

    const a = this.request.getRxjsData();
    const d = a.pipe(filter((value: any) => {
      return value;
    })).subscribe(res => {
      console.log(res);
    });

  //  取消订阅
    setTimeout(() => {
      d.unsubscribe();
    }, 100);


    // this.request.getManyRxjsData().subscribe(res => {
    //   console.log(res);
    // });
  }

}
