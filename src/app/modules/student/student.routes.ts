import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./student').then(m => m.Student),
    children: [
     {
      path: '',
      loadComponent: () => import('./search-students/search-students').then(m => m.SearchStudents),
     },
     {
      path: 'new',
      loadComponent: () => import('./form-students/form-students').then(m => m.FormStudents),
     }
    ],
  },
];

export default routes;
