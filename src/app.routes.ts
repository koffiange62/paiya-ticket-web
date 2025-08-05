import { AppLayout } from '@/core/layout/components/app.layout';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadComponent:() => import('@/features/empty/empty').then(c => c.Empty)},
        ]
    }
];