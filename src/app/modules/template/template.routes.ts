import { Routes } from "@angular/router";
import { Template } from "./template";

const routes: Routes = [
    {
        path: '',
        component: Template,
        children: [
            {
                path: '',
                loadChildren: () => import('../container/container.routes')
            }
        ]
    }
]

export default routes;