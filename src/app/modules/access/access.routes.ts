import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./access').then((c) => c.Access),
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login').then((c) => c.Login),
      },
      {
        path: 'recover',
        loadComponent: () => import('./recover-access/recover-access').then((c) => c.RecoverAccess),
      },
    ],
  },
];

export default routes;
