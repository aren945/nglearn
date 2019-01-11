import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModuleComponent} from './admin-module.component';
import { TestAdminComponent } from './test-admin/test-admin.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminModuleComponent,
  children: [
    {path: 'test-admin', component: TestAdminComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
