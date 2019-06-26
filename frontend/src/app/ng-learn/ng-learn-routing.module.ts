import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PipeComponent } from './pipe/pipe.component';
import {NgModaleComponent} from './ng-modale/ng-modale.component';
import {TodoListComponent} from './todo-list/todo-list.component';

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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgLearnRoutingModule { }
