import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-rember-component',
  templateUrl: './auth-rember-component.component.html',
  styleUrls: ['./auth-rember-component.component.scss']
})
export class AuthRemberComponentComponent implements OnInit {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }

}
