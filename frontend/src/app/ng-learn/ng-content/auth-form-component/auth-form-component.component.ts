import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AuthRemberComponentComponent } from '../auth-rember-component/auth-rember-component.component';

@Component({
  selector: 'app-auth-form-component',
  templateUrl: './auth-form-component.component.html',
  styleUrls: ['./auth-form-component.component.scss']
})
export class AuthFormComponentComponent implements OnInit, AfterContentInit {

  @ContentChild(AuthRemberComponentComponent) rember: AuthRemberComponentComponent;
  @ContentChildren(AuthRemberComponentComponent) rembers: QueryList<AuthRemberComponentComponent>; //  ContentChildren返回一个QueryList
  showMessage: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.rember) {
      this.rember.checked.subscribe((checked: boolean) => {
        console.log(checked);
        this.showMessage = checked;
      });
    }


    if (this.rembers) {
      this.rembers.forEach(item => {
        console.log(item);
        item.checked.subscribe(va => {
          this.showMessage = va;
        });
      });
    }
  }

}
