import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { StartComponent } from '../start/start.component';
import { FinishComponent } from '../finish/finish.component';

export const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'auction-market', component: AuctionMarketComponent },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: '/start' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);