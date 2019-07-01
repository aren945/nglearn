import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.component.html',
  styleUrls: ['./child-change.component.scss']
})
export class ChildChangeComponent implements OnInit, OnChanges {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
