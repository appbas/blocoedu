import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./users').then(m => m.Users),
    children: [
     {
      path: '',
      loadComponent: () => import('./search-users/search-users').then(m => m.SearchUsers),
     }
    ],
  },
];

export default routes;
