import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'milk-man-list',
    loadComponent: () => import('./pages/milk-man-list/milk-man-list.page').then( m => m.MilkManListPage)
  },
  {
    path: 'milk-man-details',
    loadComponent: () => import('./pages/milk-man-details/milk-man-details.page').then( m => m.MilkManDetailsPage)
  },
];
