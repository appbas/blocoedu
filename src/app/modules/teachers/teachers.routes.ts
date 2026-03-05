import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./teachers').then(m => m.Teachers),
    children: [
     {
      path: '',
      loadComponent: () => import('./search-teachers/search-teachers').then(m => m.SearchTeachers),
     }
    ],
  },
];

export default routes;
