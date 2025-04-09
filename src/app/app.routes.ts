import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', // 👈 Your desired default route
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
];
