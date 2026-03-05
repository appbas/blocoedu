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
            },
            {
                path: 'teachers',
                loadChildren: () => import('../teachers/teachers.routes'),
            },
            {
                path: 'users',
                loadChildren: () => import('../users/users.routes'),
            }
        ]
    }
]

export default routes;