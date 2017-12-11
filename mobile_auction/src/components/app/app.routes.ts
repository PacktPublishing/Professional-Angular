import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { StartComponent } from '../start/start.component';
import { FinishComponent } from '../finish/finish.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'dist/components/admin/admin.module#AdminModule'
  }
];

export const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'auction-market/:id', component: AuctionMarketComponent },
  { path: 'finish', component: FinishComponent },
  ...adminRoutes,
  { path: '**', redirectTo: '/start' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);