import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-admin',
  templateUrl: './test-admin.component.html',
  styleUrls: ['./test-admin.component.scss']
})
export class TestAdminComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
    this.userName = 'aren';
  }

}
