import { Routes } from '@angular/router';
import { Template } from './template';

const routes: Routes = [
  {
    path: '',
    component: Template,
    children: [
      {
        path: '',
        loadChildren: () => import('../container/container.routes'),
      },
      {
        path: 'access',
        loadChildren: () => import('../access/access.routes'),
      },
    ],
  },
  {
    path: 'login',
    redirectTo: 'access',
    pathMatch: 'full'
  }
];

export default routes;
