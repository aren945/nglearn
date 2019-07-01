import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PipeComponent } from './pipe/pipe.component';
import {NgModaleComponent} from './ng-modale/ng-modale.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {DomComponent} from './dom/dom.component';
import {TransitionComponent} from './transition/transition.component';
import {ComponentMessageComponent} from './component-message/component-message.component';
import {ComponentLifeComponent} from './component-life/component-life.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const routes: Routes = [{
  path: 'ng-content',
  component: NgContentComponent
}, {
  path: 'pipe',
  component: PipeComponent
}, {
  path: 'ng-modal',
  component: NgModaleComponent
}, {
  path: 'todolist',
  component: TodoListComponent
}, {
  path: 'dom',
  component: DomComponent
}, {
  path: 'trans',
  component: TransitionComponent
}, {
  path: 'message',
  component: ComponentMessageComponent
}, {
  path: 'component-life',
  component: ComponentLifeComponent
}, {
  path: 'rxjs',
  component: RxjsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgLearnRoutingModule { }
