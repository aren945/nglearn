import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgLearnRoutingModule } from './ng-learn-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { AuthFormComponentComponent } from './ng-content/auth-form-component/auth-form-component.component';
import { AuthRemberComponentComponent } from './ng-content/auth-rember-component/auth-rember-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { Test1Pipe } from './pipe/test-1.pipe';

@NgModule({
  declarations: [NgContentComponent, AuthFormComponentComponent, AuthRemberComponentComponent, PipeComponent, Test1Pipe],
  imports: [
    CommonModule,
    NgLearnRoutingModule
  ]
})
export class NgLearnModule { }
