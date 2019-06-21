import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { TestAdminComponent } from './test-admin/test-admin.component';

@NgModule({
  declarations: [AdminModuleComponent, TestAdminComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
