import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-message',
  templateUrl: './component-message.component.html',
  styleUrls: ['./component-message.component.scss']
})
export class ComponentMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  run(): void {
    console.log(this);
    alert('f run methods');
  }

  testChildEventEmit(value: any) {
    console.log(value);
  }
}
