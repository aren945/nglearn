import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHttpInterceptor } from './common/service/http-interceptors';
import { TestRouteComponent } from './test-route/test-route.component';
import { AppRoutingModule } from './app-routing.module';


import { IndexComponent } from './index/index.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LeftNavComponent } from './common/component/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TestRouteComponent,
    IndexComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModuleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainHttpInterceptor,
      multi: true // multi provider 设置为true 表示可以用相同的token去注册多个provider
    },
    { // 使用hash-router
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
