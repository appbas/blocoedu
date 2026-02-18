import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./container'),
        children: [
            {
                path: '',
                loadComponent: () => import('../dashboard/dashboard').then(m => m.Dashboard),
            }
        ]
    }
]

export default routes;