import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterceptorTesting } from './interceptors/interceptorTesing';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FindPropertyComponent } from './components/findProperty/findProperty.component';
import { FindAgentComponent } from './components/findAgent/findAgent.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from './guards/authGuard';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
      FindPropertyComponent,
      FindAgentComponent,
      DashboardComponent,
      HomepageComponent,
      ErrorComponent
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorTesting, multi: true},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
