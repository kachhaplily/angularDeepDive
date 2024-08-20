import { Routes } from '@angular/router';
import { LayoutComponent } from './_shared/components/layout/layout.component';
import { RoutingComponent } from './routing/routing.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ServiceComponent } from './service/service.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FromComponent } from './rxjs/from/from.component';
import { OfComponent } from './rxjs/of/of.component';

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
      {
        path: 'rxjs',
        component: RxjsComponent,
        children: [
          {
            path: 'from-rxjs',
            component: FromComponent,
          },
          {
            path: 'of-rxjs',
            component: OfComponent,
          },
        ],
      },
    ],
  },
];
