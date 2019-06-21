import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  testData = {
    a: 1,
    b: 2,
    c: {
      d: {
        e: '1'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
