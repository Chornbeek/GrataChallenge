import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { TASKS_ROUTES } from './features/tasks/tasks.routes';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full',
            },
            {
                path: 'tasks',
                children: TASKS_ROUTES,
            },
        ],
    },
];
