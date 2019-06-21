import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [{
  path: 'ng-content',
  component: NgContentComponent
}, {
  path: 'pipe',
  component: PipeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgLearnRoutingModule { }
