import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgLearnRoutingModule } from './ng-learn-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { AuthFormComponentComponent } from './ng-content/auth-form-component/auth-form-component.component';
import { AuthRemberComponentComponent } from './ng-content/auth-rember-component/auth-rember-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { Test1Pipe } from './pipe/test-1.pipe';
import { NgModaleComponent } from './ng-modale/ng-modale.component';
import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import {StorageService} from './common/service/storage.service';
import { DomComponent } from './dom/dom.component';
import { TransitionComponent } from './transition/transition.component';
import { ComponentMessageComponent } from './component-message/component-message.component';
import { ChildeComponentComponent } from './component-message/childe-component/childe-component.component';
import { ComponentLifeComponent } from './component-life/component-life.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ChildChangeComponent } from './component-life/child-change/child-change.component';
import {RequestService} from './common/service/request.service';

@NgModule({
  declarations: [
    NgContentComponent,
    AuthFormComponentComponent,
    AuthRemberComponentComponent,
    PipeComponent,
    Test1Pipe,
    NgModaleComponent,
    TodoListComponent,
    DomComponent,
    TransitionComponent,
    ComponentMessageComponent,
    ChildeComponentComponent,
    ComponentLifeComponent,
    RxjsComponent,
    ChildChangeComponent
  ],
  imports: [
    CommonModule,
    NgLearnRoutingModule,
    FormsModule
  ],
  providers: [
    StorageService,
    RequestService
  ]
})
export class NgLearnModule {
}
