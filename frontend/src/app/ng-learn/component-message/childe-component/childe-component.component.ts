import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childe-component',
  templateUrl: './childe-component.component.html',
  styleUrls: ['./childe-component.component.scss']
})
export class ChildeComponentComponent implements OnInit {

  @Input() componentName: string;
  @Input() fRun: () => void;
  @Output() testFn = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  doFRun(): void {
    this.fRun();
  }

  testEventEmi(): void {
    this.testFn.emit(true);
  }
}
