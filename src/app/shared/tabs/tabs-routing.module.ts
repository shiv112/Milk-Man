import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from "./tabs.page";
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
        {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
        },

      {
        path: 'home',
        loadComponent: () =>
          import('../../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'milkManList',
        loadComponent: () =>
          import('../../../app/pages/milk-man-list/milk-man-list.page').then(
            (m) => m.MilkManListPage
          ),
      },
      {
        path: 'milkManDetails',
        loadComponent: () =>
          import(
            '../../../app/pages/milk-man-details/milk-man-details.page'
          ).then((m) => m.MilkManDetailsPage),
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabsPageRoutingModule {}
