import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-life',
  templateUrl: './component-life.component.html',
  styleUrls: ['./component-life.component.scss']
})
export class ComponentLifeComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {

  testData = '123';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('do checke');
  }

  changeTestData(): void {
    this.testData = '456';
  }

  ngAfterViewInit(): void {
    console.log('dom is render complete');
  }
}
