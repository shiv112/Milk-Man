import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/loading-page/loading-page.page').then( m => m.LoadingPagePage)
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('../app/shared/tabs/tabs-routing.module').then((m) => m.TabsPageRoutingModule),
  },
  
];
