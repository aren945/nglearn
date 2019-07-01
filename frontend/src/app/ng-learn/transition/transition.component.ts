import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toogleShow(): void {
    this.show = !this.show;
  }
}
