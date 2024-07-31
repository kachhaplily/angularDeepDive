import { Routes } from '@angular/router';
import { LayoutComponent } from './_shared/components/layout/layout.component';
import { RoutingComponent } from './routing/routing.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'routing',
        pathMatch: 'full',
      },
      {
        path: 'routing',
        component: RoutingComponent,
      },
      {
        path: 'lifecycle',
        component: LifeCycleComponent,
      },
      {
        path: 'input-output',
        component: ParentChildComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
    ],
  },
];
