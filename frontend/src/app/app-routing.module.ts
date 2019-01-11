import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { TestRouteComponent } from './test-route/test-route.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'test', component: TestRouteComponent},
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
