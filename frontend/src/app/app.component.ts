import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.http.get('/api/test1').toPromise().then(res => {
      console.log(res);
    })
  }
}
