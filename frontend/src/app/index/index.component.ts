import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

enum Color {Red, Green, Blue}

interface Itest {
  a: string;
  [propName: string]: any;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('myP') myP: TemplateRef<any>;

  constructor() { }

  private list: Array<number> = [1, 2, 3];
  private list1: number[] = [4, 5, 6];

  // 元组

  private tupleList: [string | number, number];
  private list3: Array<number | string> = [1, 2, 3, '1231'];
  // 枚举
  private c: Color = Color.Red;

  ngOnInit() {
    console.log(this.myP);
    console.log(this.list1);
    console.log(this.c);
    this.tupleList = [1, 3];
    // this.tupleList[2] = 123;
  }

}
