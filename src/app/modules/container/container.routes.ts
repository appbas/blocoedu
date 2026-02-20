import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./container'),
        children: [
            {
                path: '',
                loadComponent: () => import('../dashboard/dashboard').then(m => m.Dashboard),
            },
            {
                path: 'students',
                loadChildren: () => import('../student/student.routes'),
            }
        ]
    }
]

export default routes;