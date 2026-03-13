import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
<<<<<<< HEAD
    { path: '', redirectTo: !localStorage.getItem('user') ? '/auth' : '/staff/checkin', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.module').then((m) => m.StaffModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
    }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
=======
    {
        path: '',
        redirectTo: !localStorage.getItem('user') ? '/auth' : '/staff/checkin',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.module').then((m) => m.StaffModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
    }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
