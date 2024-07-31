import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { LayoutComponent } from './_shared/components/layout/layout.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { SharedModule } from './_shared/shared.module';
import { RoutingComponent } from './routing/routing.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RoutingComponent,
    LifeCycleComponent,
    ParentChildComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
