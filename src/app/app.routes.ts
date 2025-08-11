import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./page/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('./page/reservas/reservas').then((m) => m.Reservas),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
