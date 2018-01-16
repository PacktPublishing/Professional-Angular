import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionMarketComponent } from '../auction-market/auction-market.component';
import { StartComponent } from '../start/start.component';
import { FinishComponent } from '../finish/finish.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'dist/components/admin/admin.module#AdminModule'
  }
];

export const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auction-market/:id', component: AuctionMarketComponent },
  { path: 'finish', component: FinishComponent },
  ...adminRoutes,
  { path: '**', redirectTo: '/start' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);