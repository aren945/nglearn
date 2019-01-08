import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHttpInterceptor } from './common/service/http-interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainHttpInterceptor,
      multi: true // multi provider 设置为true 表示可以用相同的token去注册多个provider
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
